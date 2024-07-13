import {
  getSequences,
  getBackwardSequences,
  validateResponse,
  validateBackwardResponse,
} from "./utils.js";

// CONSTANTS
let pretrial_display_time = 2000;
let digit_display_time = 1000;

// VARIABLES
let timeline = [];
let direct_score = 0;
let inward_score = -2;
let max_direct_sequence = 0;
let max_inward_sequence = 0;
let total_score = 0;

const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData();
  },
});

// Direct Instructions
function createDirectInstructions() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h2>Esta es una tarea de memoria.</h2>" +
      "<p>Essa é uma tarefa de memória.</p>" +
      "<br>" +
      "<h3>Algunos números surgirán en la pantalla, Pon atención. Cuándo termine, repita la secuencia. </h3>" +
      "<p>Alguns números aparecerão na tela, observe com atenção. Assim que terminar, repita a sequência.</p>" +
      "<br>",

    choices: "ALL_KEYS",
    prompt:
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<p>Pressione qualquer tecla para continuar.</p>",
    data: { part: "instructions" },
  };
}
timeline.push(createDirectInstructions());

// Function to create a pre trial preparation
function createPreTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h3>Memorice la secuencia</h3>" + "<p>Memorize a sequência</p>",
    choices: "NO_KEYS",
    trial_duration: pretrial_display_time,
    data: { type: "pre-trial" },
  };
}

// Function to create a Digit trial
function createDigitTrial(digit) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:48px">${digit}</div>`,
    trial_duration: digit_display_time,
    data: { type: "digit" },
  };
}

// Function to create a Response trial
function createResponseTrial(sequence, backward = false) {
  let stimulusHTML = `
              <p>Escriba la secuencia. ${sequence} :</p>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 150px; margin: 0 auto;">
                ${Array.from(
                  { length: 9 },
                  (_, i) =>
                    `<button class="digit-button jspsych-btn" data-digit="${
                      i + 1
                    }" style="font-size: 24px; padding: 10px;">${
                      i + 1
                    }</button>`
                ).join("")}
              </div>
              <div id="response" style="font-size: 24px; margin: 20px 0;"></div>
              <div>
              <button
                id="clear-button"
                class="jspsych-btn"
                style="font-size: 12px; padding: 5px; margin-bottom: 20px"
              >
                <span style="display: inline-block; vertical-align: middle;">Borrar</span>
                <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle; margin-left: 5px;">backspace</span>
              </button>
            </div>
            `;

  let user_response = [];

  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: stimulusHTML,
    choices: ['<div style="font-size:20px">Seguir</div>'],
    data: { type: "response" },
    on_load: function () {
      document.querySelectorAll(".digit-button").forEach((button) => {
        button.addEventListener("click", function () {
          let digit = this.getAttribute("data-digit");
          user_response.push(digit);
          document.getElementById("response").textContent =
            user_response.join(" ");
        });
      });
      document
        .getElementById("clear-button")
        .addEventListener("click", function () {
          user_response.pop();
          document.getElementById("response").textContent =
            user_response.join(" ");
        });
    },
    on_finish: function (data) {
      data.user_response = user_response;
      if (backward) {
        data.correct = validateBackwardResponse(sequence, user_response);
        if (data.correct) {
          inward_score++;
        }
      } else {
        data.correct = validateResponse(sequence, user_response);
        if (data.correct) {
          direct_score++;
        }
      }
      console.log(direct_score, inward_score);
      user_response = [];
    },
  };
}

function createFeedbackTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const lastTrial = jsPsych.data.get().last(1).values()[0];
      return lastTrial.correct
        ? "<h4>Correcto!</h4>" + "<p>Correto!</p>"
        : "<h4>Incorrecto!</h4>" + "<p>Incorreto!</p>";
    },
    trial_duration: 1000,
    choices: "NO_KEYS",
    data: { type: "feedback" },
  };
}

// Function to create a feedback for learning trial
function createPraticeFeedbackTrial(sequence) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const lastTrial = jsPsych.data.get().last(1).values()[0];
      return lastTrial.correct
        ? "<h4>Muy bien.</h4>" + "<p>Muito bem.</p>"
        : `<p>No exactamente. La secuencia era <strong>${sequence[0]} - ${sequence[1]}</strong>.</p>
              <p>Entonces, en orden de atrás hacia adelante debe introducir <strong>${sequence[1]} - ${sequence[0]}</strong>.</p>
              <p>Vamos a intentarlo de nuevo.</p>`;
    },
    data: { type: "feedback" },
  };
}

function createMidPraticeFeedbackTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>¿Vamos a intentar una vez más? Recuerde que debe introducir los números de atrás hacia adelante.</h4>" +
      "<p>Vamos tentar mais uma vez? Lembre-se que você deve digitar os números de trás para frente.</p>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

function createPostPracticeTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h4>¡Vamos empezar!</h4>" + "<p>Vamos começar!</p>",
    // "<p>Muito bem! Vamos começar</p>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

// Function to create a conditional trial block
function createLevel(index, backward = false) {
  let s1, s2;

  if (!backward) {
    ({ s1, s2 } = getSequences(index));
  } else {
    ({ s1, s2 } = getBackwardSequences(index));
  }

  const pretrial = createPreTrial();

  const digits1 = s1.map((digit) => createDigitTrial(digit));
  const digits2 = s2.map((digit) => createDigitTrial(digit));

  const response1 = createResponseTrial(s1, backward);
  const response2 = createResponseTrial(s2, backward);

  const feedback = createFeedbackTrial();

  return {
    timeline: [
      pretrial,
      ...digits1,
      response1,
      feedback,
      pretrial,
      ...digits2,
      response2,
      feedback,
    ],
    conditional_function: function () {
      const correctCount = jsPsych.data
        .get()
        .filter({ type: "response" })
        .last(2)
        .filter({ correct: true })
        .count();

      return correctCount > 0;
    },
  };
}

// Function to add levels to the timeline
function addDirectTrials() {
  // Initial trial
  timeline.push(...createLevel(0).timeline);

  // Add levels
  for (let direct_index = 1; direct_index <= 7; direct_index++) {
    max_direct_sequence = direct_index;
    timeline.push(createLevel(direct_index));
  }
}
// addDirectTrials();

// Inward Instructions
function createInwardInstructions() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h3>Ahora, usted verá algunos números más.</h3>" +
      "<p>Agora, você verá mais alguns números</p>" +
      "<br>" +
      "<h3>Esta vez, cuándo termine, usted debe introducirlos en orden de atrás hacia  adelante. </h3>" +
      "<p>Desta vez, quando terminar, você deve digitá-los de trás para frente. </p>" +
      "<br>",

    choices: "ALL_KEYS",
    prompt:
      "<h4>¿Vamos a intentarlo?</h4>" +
      "<p>Vamos tentar?</p>" +
      "<br>" +
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<p>Pressione qualquer tecla para continuar.</p>",
    data: { part: "instructions" },
  };
}
timeline.push(createInwardInstructions());

// Function to create a practice trial
function createPracticeTrial(sequence) {
  const pretrial = createPreTrial();

  const practiceDigitTrials = sequence.map((digit) => createDigitTrial(digit));
  const practiceResponseTrial = createResponseTrial(sequence, true);
  const feedback = createPraticeFeedbackTrial(sequence);

  return {
    timeline: [
      pretrial,
      ...practiceDigitTrials,
      practiceResponseTrial,
      feedback,
    ],
    loop_function: function (data) {
      const trialsData = data.values();
      const responseTrialData = trialsData[trialsData.length - 2];
      return !responseTrialData.correct;
    },
  };
}

// Practice level
function createPraticeLevel() {
  let s1, s2;

  ({ s1, s2 } = getBackwardSequences(0));

  const practice1 = createPracticeTrial(s1);
  const midpractice = createMidPraticeFeedbackTrial();
  const practice2 = createPracticeTrial(s2);
  const postpractice = createPostPracticeTrial();

  return {
    timeline: [practice1, midpractice, practice2, postpractice],
  };
}
timeline.push(createPraticeLevel());

// Function to add levels to the timeline
function addInwardTrials() {
  for (let inward_index = 1; inward_index <= 8; inward_index++) {
    timeline.push(createLevel(inward_index, true));
  }
}
addInwardTrials();

// Function to generate the final score display dynamically
function endTest() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const total_score = direct_score + inward_score;
      return `
                <p>Pontos ordem direta: ${direct_score}</p>
                <p>Pontos ordem inversa: ${inward_score}</p>
                <p>Sequência Maior de Dígitos de Ordem Direta: ${max_direct_sequence}</p>
                <p>Sequência Maior de Dígitos de Ordem Inversa: ${max_inward_sequence}</p>
                <p>Total de pontos: ${total_score}</p>
            `;
    },
    choices: "NO_KEYS",
  };
}
timeline.push(endTest());

jsPsych.run(timeline);
