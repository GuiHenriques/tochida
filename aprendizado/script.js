import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

import { trials_pt } from "./orders/order-test.js";
import { trials_pt_1 } from "./orders/order-1.js";

// VARIABLES
let timeline = [];
let experimentOrder;

// Initialize jsPsych
const jsPsych = initJsPsych();

// Choose Experiment Order
function experimentOrderTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <p>Choose the order of the experiment.</p>
    <div style="display: flex; justify-content: center; gap: 20px">
        ${Array.from(
          { length: 5 },
          (_, i) =>
            `<button class="digit-button jspsych-btn" data-digit="${i}" style="font-size: 24px;">${i}</button>`
        ).join("")}
      </div>
    `,
    choices: "NO_KEYS",
    on_load: function () {
      document.querySelectorAll(".digit-button").forEach((button) => {
        button.addEventListener("click", function () {
          experimentOrder = this.getAttribute("data-digit");
          console.log("Experiment Order", experimentOrder);
          jsPsych.finishTrial();
        });
      });
    },
  };
}

// Select choosen trial
function mapTrialOrders(index) {
  console.log("Index", index);
  switch (index) {
    case "0":
      console.log("Index", index);
      return (trials_pt, "trials_es", "trials_pt_es", "trials_es_pt");
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
// // Test trial
// trials_pt.test.forEach((trial) => {
//   let test_trial = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: createTestGrid(trial),
//     // trial_duration: displayTime,
//   };
//   timeline.push(test_trial);
// });

function runExperiment() {
  // Preload assets
  timeline.push(preloadAssets());

  // Experiment order
  timeline.push(experimentOrderTrial());
  console.log("Eo", experimentOrder);
  //  Load order
  let trials = mapTrialOrders(experimentOrder);
  

  // Instructions
  timeline.push(instructionsLearnTrial());

  // Learn Trials
  // createLearnTrials(trials);
}

runExperiment();

// Start the experiment
jsPsych.run(timeline);
