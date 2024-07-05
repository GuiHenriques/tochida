import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

import { trials_pt } from "./orders/order-test.js";

// Initialize jsPsych
var jsPsych = initJsPsych();
var timeline = [];

// Preload

var images = loadObjects().concat(loadCreatures());
var audios = loadAudios();

var preload = {
  type: jsPsychPreload,
  audio: audios,
  images: images,
};
timeline.push(preload);

// Instructions trial
var instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the experiment. Press SPACE to continue.</p>",
  choices: [" "],
};
timeline.push(instructions);

// Learn trial
for (let i = 0; i < 2; i++) {
  trials_pt.learn.forEach((trial) => {
    // console.log(trial.grid)
    let learn_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: createGrid(trial.grid),
      trial_duration: 500,
    };
    timeline.push(learn_trial);

    let sound_learn_trial = {
      type: jsPsychAudioKeyboardResponse,
      stimulus: trial.audio,
      prompt: createGrid(trial.grid),
    };
    timeline.push(sound_learn_trial);
  });
}

// Test trial
trials_pt.test.forEach((trial) => {
  let test_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: createTestGrid(trial),
    // trial_duration: displayTime,
  };
  timeline.push(test_trial);
});

// Start the experiment
jsPsych.run(timeline);
