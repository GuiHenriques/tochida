import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

import { trials_pt } from "./orders/order-test.js";
import {
  trials_pt_1,
  trials_es_1,
  trials_pt_es_1,
  trials_es_pt_1,
} from "./orders/order-1.js";
import {
  trials_es_2,
  trials_pt_2,
  trials_pt_es_2,
  trials_es_pt_2,
} from "./orders/order-2.js";
import {
  trials_es_pt_3,
  trials_pt_es_3,
  trials_pt_3,
  trials_es_3,
} from "./orders/order-3.js";
import {
  trials_pt_es_4,
  trials_es_pt_4,
  trials_es_4,
  trials_pt_4,
} from "./orders/order-4.js";

// Constants
let fixationTime = 300;
let preLearnTrialTime = 500;
let learnTrialTime = 650;
let preTestTrialTime = 1000;
let testTrialTime = 600;

// Initialize jsPsych
const jsPsych = initJsPsych();

// Choose Experiment Order
function experimentOrderTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>What is the order of the experiments?</p>",
    choices: ["0", "1", "2", "3", "4"],
    on_finish: function (data) {
      data.type = "experiment_order";
      data.order = parseInt(data.response);
    },
  };
}

// Select chosen trial
function mapTrialOrders(index) {
  switch (index) {
    case 0:
      return trials_pt;
    case 1:
      return [trials_pt_1, trials_es_1, trials_es_pt_1, trials_pt_es_1];
    case 2:
      return [trials_es_2, trials_pt_2, trials_pt_es_2, trials_es_pt_2];
    case 3:
      return [trials_es_pt_3, trials_pt_es_3, trials_pt_3, trials_es_3];
    case 4:
      return [trials_pt_es_4, trials_es_pt_4, trials_es_4, trials_pt_4];
    default:
      return null;
  }
}

// Instructions Learn trial
function instructionsLearnTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>Instructions</p>",
    choices: "ALL_KEYS",
  };
}

// Fixation trial
function createFixationTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
          <div class="fixation">
            <p class="fixation-cross">+</p>
          </div>
      `,
    trial_duration: fixationTime,
  };
}

// Learn Trials
function createLearnTrials(trials) {
  let learnTimeline = [];
  // Repeat twice
  for (let i = 0; i < 2; i++) {
    trials.learn.forEach((trial) => {
      let fixation = createFixationTrial();

      let image_learn_trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: createGrid(trial.grid),
        trial_duration: preLearnTrialTime,
      };

      let sound_learn_trial = {
        type: jsPsychAudioKeyboardResponse,
        stimulus: trial.audio,
        prompt: createGrid(trial.grid),
        trial_duration: learnTrialTime,
      };

      learnTimeline = learnTimeline.concat([
        fixation,
        image_learn_trial,
        sound_learn_trial,
      ]);
    });
  }
  return learnTimeline;
}

// Test Trials
function createTestTrials(trials) {
  let testTimeline = [];

  trials.test.forEach((trial) => {
    let fixation = createFixationTrial();

    let image_test_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: createTestGrid(trial),
      trial_duration: preTestTrialTime,
    };

    let sound_test_trial = {
      type: jsPsychAudioKeyboardResponse,
      stimulus: trial.audio,
      prompt: createTestGrid(trial),
      trial_duration: testTrialTime,
    };

    testTimeline = testTimeline.concat([
      fixation,
      image_test_trial,
      sound_test_trial,
    ]);
  });
}

async function runExperiment() {
  let preTimeline = [];
  let timeline = [];

  // Experiment order
  let orderTrial = experimentOrderTrial();
  preTimeline.push(orderTrial);

  // Run the initial preTimeline to get the order
  await jsPsych.run(preTimeline);

  // Retrieve the selected order
  let order = jsPsych.data
    .get()
    .filter({ type: "experiment_order" })
    .values()[0].order;
  console.log("Order:", order);

  // Instructions
  timeline.push(instructionsLearnTrial());

  // Map the selected order to the corresponding trials
  let orders = mapTrialOrders(order);
  console.log("Orders:", orders);

  // Add the learn trials to the timeline
  orders.forEach((order) => {
    let learnTrials = createLearnTrials(order);
    timeline.push(...learnTrials);
  });

  // Add the test trials to the timeline
  orders.forEach((order) => {
    let testTrials = createTestGrid(order.test);
    timeline.push(...testTrials);
  });

  // Run the experiment
  jsPsych.run(timeline);
}

runExperiment();
