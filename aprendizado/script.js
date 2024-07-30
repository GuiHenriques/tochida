import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

import { trials_pt } from "./orders/order-test.js";
import { trials_pt_1 } from "./orders/order-1.js";
import { trials_pt_2 } from "./orders/order-2.js";
import { trials_pt_3 } from "./orders/order-3.js";

// Initialize jsPsych
const jsPsych = initJsPsych();

// Choose Experiment Order
function experimentOrderTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>What is the order of the experiments</p>",
    choices: ["1", "2", "3", "4"],
    on_finish: function (data) {
      data.order = data.response + 1;
    },
  };
}

// Select choosen trial
function mapTrialOrders(index) {
  switch (index) {
    case "0":
      return trials_pt, "trials_es", "trials_pt_es", "trials_es_pt";
    case "1":
      return trials_pt_1;
    case "2":
      return "trials_pt_2";
    case "3":
      return "trials_pt_3";
    case "4":
      return "trials_pt_4";
  }
}

// Preload
function preloadAssets() {
  let images = loadObjects().concat(loadCreatures());
  let audios = loadAudios();

  return {
    type: jsPsychPreload,
    audio: audios,
    images: images,
  };
}

// Instructions Learn trial
function instructionsLearnTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,

    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>En esta actividad, usted verá algunas figuras y oirá una voz le orientando a mirar a una de estas figuras. Direccione su mirada a la figura indicada.</h4>" +
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<hr>" +
      "<p>Nessa atividade, você verá algumas figuras na tela, e ouvirá uma voz te orientando a olhar para uma dessas figuras. Direcione seu olhar para a figura indicada.</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>" +
      "</div>",
    choices: "ALL_KEYS",
  };
}

// Instruction Test Trial
function instructionsTestTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Oiga la palabra y direccione su mirada a la figura indicada.</h4>" +
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<hr>" +
      "<p>Ouça a palavra e direcione seu olhar para a figura indicada.</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>" +
      "</div>",
    choices: "ALL_KEYS",
  };
}

// Learn Trials
function createLearnTrials(trials) {
  for (let i = 0; i < 2; i++) {
    trials.learn.forEach((trial) => {
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

async function runExperiment() {
  let timeline = [];

  // Preload assets
  timeline.push(preloadAssets());

  // Experiment order
  let order = experimentOrderTrial();
  timeline.push(order);

  // timeline.push({
  //   type: jsPsychHtmlKeyboardResponse,
  //   stimulus: `${experimentOrder}`,
  // });
  //  Load order
  // let trials = mapTrialOrders(experimentOrder);

  // Instructions
  timeline.push(instructionsLearnTrial());

  // Learn Trials
  // createLearnTrials(trials);
}

runExperiment();

// Start the experiment
jsPsych.run(timeline);
