import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

import { trials_pt } from "./orders/order-test.js";
import { trials_pt_1 } from "./orders/order-1.js";
// import { trials_pt_2 } from "./orders/order-2.js";
// import { trials_pt_3 } from "./orders/order-3.js";
// import { trials_pt_4 } from "./orders/order-4.js";

// Initialize jsPsych
const jsPsych = initJsPsych();

// Choose Experiment Order
function experimentOrderTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>What is the order of the experiments?</p>",
    choices: ["1", "2", "3", "4"],
    on_finish: function (data) {
      data.order = parseInt(data.response) + 1;
    },
  };
}

// Select chosen trial
function mapTrialOrders(index) {
  switch (index) {
    case 1:
      return trials_pt;
    case 2:
      return trials_pt_1;
    // case 3:
    //   return trials_pt_2;
    // case 4:
    //   return trials_pt_3;
    // case 5:
    //   return trials_pt_4;
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

// Learn Trials
function createLearnTrials(trials) {
  const learnTimeline = [];
  for (let i = 0; i < 2; i++) {
    trials.learn.forEach((trial) => {
      let learn_trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: createGrid(trial.grid),
        trial_duration: 500,
      };
      learnTimeline.push(learn_trial);

      let sound_learn_trial = {
        type: jsPsychAudioKeyboardResponse,
        stimulus: trial.audio,
        prompt: createGrid(trial.grid),
      };
      learnTimeline.push(sound_learn_trial);
    });
  }
  return learnTimeline;
}

async function runExperiment() {
  let timeline = [];

  // Experiment order
  let orderTrial = experimentOrderTrial();
  timeline.push(orderTrial);

  // Instructions
  timeline.push(instructionsLearnTrial());

  // Run the initial timeline to get the order
  await jsPsych.run(timeline);

  // Retrieve the selected order
  let orderData = jsPsych.data
    .get()
    .filter({ trial_type: "html-button-response" })
    .values();
  let selectedOrder = orderData.length > 0 ? orderData[0].order : null;
  console.log("Selected order:", selectedOrder);

  // Map the selected order to the corresponding trials
  if (selectedOrder !== null) {
    let trialOrder = mapTrialOrders(selectedOrder);
    console.log("Trial order based on selection:", trialOrder);

    // Add the learn trials to the timeline
    if (trialOrder) {
      let learnTrials = createLearnTrials(trialOrder);
      timeline = [...timeline, ...learnTrials];
    }

    // Run the experiment with the updated timeline
    jsPsych.run(timeline);
  }
}

runExperiment();
