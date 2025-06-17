// Utility functions
import {
  createGrid,
  createTestGrid,
  loadObjects,
  loadCreatures,
  loadAudios,
} from "./utils.js";

// Practice Trial Orders
import {
  practice_trials_1,
  practice_trials_2,
  practice_trials_3,
  practice_trials_4,
} from "./orders/order-practice.js";

// Trial Orders
import {
  trials_pt_1,
  trials_en_1,
  trials_pt_en_1,
  trials_en_pt_1,
} from "./orders/order-1.js";
import {
  trials_en_2,
  trials_pt_2,
  trials_pt_en_2,
  trials_en_pt_2,
} from "./orders/order-2.js";
import {
  trials_en_pt_3,
  trials_pt_en_3,
  trials_pt_3,
  trials_en_3,
} from "./orders/order-3.js";
import {
  trials_pt_en_4,
  trials_en_pt_4,
  trials_en_4,
  trials_pt_4,
} from "./orders/order-4.js";

// Constants
let fixationTime = 3000;
let preLearnTrialTime = 500;
let learnTrialTime = 6500;
let preTestTrialTime = 1000;
let testTrialTime = 6000;

// Initialize jsPsych
const jsPsych = initJsPsych();

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

// Choose Experiment Order
function experimentOrderTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h2>Ordem do Experimento:</h2>",
    choices: ["1", "2", "3", "4"],
    on_finish: function (data) {
      data.type = "experiment_order";
      data.order = parseInt(data.response) + 1;
    },
  };
}

// Choose Experiment Type
function experimentTypeTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h2>Tipo de Experimento:</h2>",
    choices: ["Aprendizado e Teste", "Teste"],
    data: { part: "experiment_type" },
    on_finish: function (data) {
      data.type = "experiment_type";
      data.experiment_type = parseInt(data.response);
    },
  };
}

function mapPracticeTrials(index) {
  switch (index) {
    case 1:
      return practice_trials_1;
    case 2:
      return practice_trials_2;
    case 3:
      return practice_trials_3;
    case 4:
      return practice_trials_4;
  }
}

// Select chosen trial 
// ? Caso ele ja tenha balanciado as ordens e so trocar o index pra 1
function mapTrialOrders(index) {
  switch (index) {
    case 1:
      return [trials_pt_1, trials_en_1, trials_en_pt_1, trials_pt_en_1];
    case 2:
      return [trials_en_2, trials_pt_2, trials_pt_en_2, trials_en_pt_2];
    case 3:
      return [trials_en_pt_3, trials_pt_en_3, trials_pt_3, trials_en_3];
    case 4:
      return [trials_pt_en_4, trials_en_pt_4, trials_en_4, trials_pt_4];
  }
}

// Instruction Practice Trial
function instructionsPracticeTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Pratique a tarefa antes de começar o experimento.</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>" +
      "</div>",
    choices: "ALL_KEYS",
  };
}

// Instructions Learn trial
function instructionsLearnTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,

    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Nessa atividade, você verá algumas figuras na tela, e ouvirá uma voz te orientando a olhar para uma dessas figuras. Direcione seu olhar para a figura indicada.</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>" +
      "</div>",
    choices: "ALL_KEYS",
  };
}

// Instructions Test trial
function instructionsTestTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,

    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Ouça a palavra e direcione seu olhar para a figura indicada.</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>" +
      "</div>",
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
    choices: "NO_KEYS",
  };
}

// Practice Trials
function createPracticeTrials(trials) {
  let learnPracticeTrials = createLearnPracticeTrials(trials);
  let testPracticeTrials = createTestTrials(trials);
 
  return learnPracticeTrials.concat(testPracticeTrials);
}

function createLearnPracticeTrials(trials) {
  let practiceTimeline = [];

  practiceTimeline.push(instructionsPracticeTrial());

  trials.practice.forEach((trial) => {
    let fixation = createFixationTrial();

    let image_practice_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: createGrid(trial.grid),
      trial_duration: preLearnTrialTime,
      choices: "NO_KEYS",
    };

    let sound_practice_trial = {
      type: jsPsychAudioKeyboardResponse,
      stimulus: trial.audio,
      prompt: createGrid(trial.grid),
      trial_duration: learnTrialTime,
      choices: "NO_KEYS",
    };
    
    practiceTimeline = practiceTimeline.concat([
      fixation,
      image_practice_trial,
      sound_practice_trial,
    ]);
    let i = 0;
    console.log("Audio:", trial.audio);
    
  });

  return practiceTimeline;
}

// Learn Trials
function createLearnTrials(trials) {
  let learnTimeline = [];

  learnTimeline.push(instructionsLearnTrial());
  // Repeat twice
  for (let i = 0; i < 2; i++) {
    trials.learn.forEach((trial) => {
      let fixation = createFixationTrial();

      let image_learn_trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: createGrid(trial.grid),
        trial_duration: preLearnTrialTime,
        choices: "NO_KEYS",
      };

      let sound_learn_trial = {
        type: jsPsychAudioKeyboardResponse,
        stimulus: trial.audio,
        prompt: createGrid(trial.grid),
        trial_duration: learnTrialTime,
        choices: "NO_KEYS",
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

  testTimeline.push(instructionsTestTrial());

  trials.test.forEach((trial) => {
    let fixation = createFixationTrial();

    let image_test_trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: createTestGrid(trial.grid),
      trial_duration: preTestTrialTime, 
      choices: "NO_KEYS",
    };

    let sound_test_trial = {
      type: jsPsychAudioKeyboardResponse,
      stimulus: trial.audio,
      prompt: createTestGrid(trial.grid),
      trial_duration: testTrialTime,
      choices: "NO_KEYS",
    };

    testTimeline = testTimeline.concat([
      fixation,
      image_test_trial,
      sound_test_trial,
    ]);
  });

  return testTimeline;
}

function joinLearnAndTestTrials(order) {
  let learnTrials = createLearnTrials(order);
  let testTrials = createTestTrials(order);
  return learnTrials.concat(testTrials);
}

function thankTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Obrigado!</h4>" +
      "</div>",
  };
}

async function runExperiment() {
  let preTimeline = [];
  let timeline = [];

  // Preload Assets
  preTimeline.push(preloadAssets());

  // Experiment order
  let orderTrial = experimentOrderTrial();
  preTimeline.push(orderTrial);

  // Experiment type
  let experimentType = experimentTypeTrial();
  preTimeline.push(experimentType);

  // Run the initial preTimeline to get the order
  await jsPsych.run(preTimeline);

  // Retrieve order and type
  let order = jsPsych.data
    .get()
    .filter({ type: "experiment_order" })
    .values()[0].order;

  let experiment_type = jsPsych.data
    .get()
    .filter({ type: "experiment_type" })
    .values()[0].experiment_type;

  // Map the selected order to the corresponding trials
  let orders = mapTrialOrders(order);

  // Add Practice Trials if the experiment type is 0
  if (experiment_type === 0) {
    let practice_trials = mapPracticeTrials(order);

    // Load the practice trials in the timeline
    timeline = timeline.concat(createPracticeTrials(practice_trials));
  }

  // Select the trials based on the experiment type
  orders.forEach((order) => {
    if (experiment_type === 0) {
      timeline = timeline.concat(joinLearnAndTestTrials(order));
    } else {
      timeline = timeline.concat(createTestTrials(order));
    }
  });

  // Thank Trial
  timeline.push(thankTrial());

  // Run the experiment
  jsPsych.run(timeline);
}

runExperiment();
