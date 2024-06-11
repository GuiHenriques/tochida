import { createImageTable, loadObjects, loadCreatures } from "./utils.js";

// Load objects
const objects = loadObjects();
const creatures = loadCreatures();

// Trials
const trials = [
  {
    square1: { creature: creatures[0], object: objects[0] },
    square2: { creature: creatures[0], object: objects[1] },
    square3: { creature: creatures[0], object: objects[2] },
    square4: { creature: creatures[0], object: objects[3] },
  },
  {
    square1: { creature: creatures[0], object: objects[12] },
    square2: { creature: creatures[0], object: objects[13] },
    square3: { creature: creatures[0], object: objects[14] },
    square4: { creature: creatures[0], object: objects[15] },
  },
];

// Initialize jsPsych
var jsPsych = initJsPsych();

var timeline = [];
var grid1 = createImageTable(trials[0]);

// Instructions trial
var instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the experiment. Press SPACE to continue.</p>",
  choices: [" "],
};
timeline.push(instructions);

// Create a timeline step for each trial using forEach
trials.forEach((trial) => {
  let imageTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: createImageTable(trial),
    // trial_duration: displayTime,
  };
  timeline.push(imageTrial);
});

// Start the experiment
jsPsych.run(timeline);
