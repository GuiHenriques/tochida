import {
  getSequences,
  getBackwardSequences,
  validateResponse,
  validateBackwardResponse,
  saveData,
} from "./utils.js";

// CONSTANTS
let pretrial_display_time = 2000;
let feedback_display_time = 1500;
let digit_display_time = 1000;

// VARIABLES
let timeline = [];
let participant = "";
let direct_score = 0;
let inward_score = 0;
let max_direct_sequence = 0;
let max_inward_sequence = 0;

const jsPsych = initJsPsych({
  on_finish: function () {
    let participant_id = jsPsych.data
      .get()
      .filter({ part: "participant_id" })
      .values()[0].response.id;
    console.log("Participant ID", participant_id);

    let data = jsPsych.data
      .get()
      .last()
      .ignore("stimulus")
      .ignore("rt")
      .ignore("time_elapsed")
      .ignore("internal_node_id")
      .ignore("trial_type")
      .ignore("trial_index")
      .ignore("response")
      .csv();

    let filename = `memoria_${participant_id}.csv`;
    saveData(data, filename);
  },
});

// Participant ID
function getParticipantId() {
  return {
    type: jsPsychSurveyText,
    questions: [{ prompt: "ID do participante", name: "id", columns: 20 }],
    button_label: "Continuar",
    data: { part: "participant_id" },
    on_finish: function (data) {
      participant = data.response.id;
    }
  };
}

// Direct Instructions
function createDirectInstructions() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Esta es una tarea de memoria.</h4>" +
      "<h4>Algunos números surgirán en la pantalla, Pon atención. Cuándo termine, repita la secuencia. </h4>" +
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<hr>" +
      "<p>Essa é uma tarefa de memória.</p>" +
      "<p>Alguns números aparecerão na tela, observe com atenção. Assim que terminar, repita a sequência.</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>" +
      "<br>",
    choices: "ALL_KEYS",
    data: { part: "instructions" },
  };
}

// Function to create a pre trial preparation
function createPreTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Memorice la secuencia</h4>" + "<hr>" + "<p>Memorize a sequência</p>",
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
    choices: "NO_KEYS",
    trial_duration: digit_display_time,
    data: { type: "digit" },
  };
}

// Function to create a Response trial
function createResponseTrial(sequence, backward = false) {
  let user_response = [];

  let stimulusHTML = `
      <p>Escriba la secuencia:</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 150px; margin: 0 auto;">
        ${Array.from(
          { length: 9 },
          (_, i) =>
            `<button class="digit-button jspsych-btn" data-digit="${
              i + 1
            }" style="font-size: 24px; padding: 10px;">${i + 1}</button>`
        ).join("")}
      </div>
      <div id="response" style="height: 24px; font-size: 24px; margin: 20px 0;"></div>
      <div style="display: flex; justify-content: space-between; gap: 50px">
        <button id="clear-button" class="jspsych-btn" style="padding: 7px">
          <span style="display: inline-block; vertical-align: middle; font-size: 14px">Borrar</span>
          <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle;">backspace</span>
        </button>
        <button id="submit-button" class="jspsych-btn" style="padding: 7px">
          <span style="display: inline-block; vertical-align: middle; font-size: 16px">Seguir</span>
          <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle;">arrow_forward</span>
        </button>
      </div>
    `;

  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: stimulusHTML,
    choices: "NO_KEYS",
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
      document
        .getElementById("submit-button")
        .addEventListener("click", function () {
          jsPsych.finishTrial({
            response: user_response,
          });
        });
    },
    on_finish: function (data) {
      data.user_response = user_response;
      if (backward) {
        data.correct = validateBackwardResponse(sequence, user_response);

        if (data.correct) {
          inward_score++;
          max_inward_sequence = sequence.length;
        }
      } else {
        data.correct = validateResponse(sequence, user_response);
        if (data.correct) {
          direct_score++;
          max_direct_sequence = sequence.length;
        }
      }
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
        ? "<h4>Correcto!</h4>" + "<hr>" + "<p>Correto!</p>"
        : "<h4>Incorrecto!</h4>" + "<hr>" + "<p>Incorreto!</p>";
    },
    trial_duration: feedback_display_time,
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
        ? "<h4>Muy bien.</h4>" + "<hr>" + "<p>Muito bem.</p>"
        : `<h4>No exactamente. La secuencia era ${sequence[0]} - ${sequence[1]}.</h4>
            <h4>Entonces, en orden de atrás hacia adelante debe introducir ${sequence[1]} - ${sequence[0]}.</h4>
            <h4>Vamos a intentarlo de nuevo.</h4>
            <h4> Pulse cualquier tecla para seguir.</h4>
            <hr>
            <p>Não exatamente. A sequência era ${sequence[0]} - ${sequence[1]}.</p>
            <p>Então, na ordem de trás para frente, você deve digitar ${sequence[1]} - ${sequence[0]}.</p>
            <p>Vamos tentar novamente.</p>
            <p>Pressione qualquer tecla para continuar.</p>`;
    },
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

function createMidPraticeFeedbackTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>¿Vamos a intentar una vez más?</h4>" +
      "<h4>Recuerde que debe introducir los números de atrás hacia adelante.</h4>" +
      "<h4>Pulse cualquier tecla para seguir.</h4>" +
      "<hr>" +
      "<p>Vamos tentar mais uma vez?</p>" +
      "<p>Lembre-se que você deve digitar os números de trás para frente.</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

function createPostPracticeTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>¡Vamos empezar!</h4>" +
      "<h4>Pulse cualquier tecla para seguir.</h4>" +
      "<hr>" +
      "<p>Vamos começar!</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>",
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
    timeline.push(createLevel(direct_index));
  }
}

// Inward Instructions
function createInwardInstructions() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Ahora, usted verá algunos números más.</h4>" +
      "<h4>Esta vez, cuándo termine, usted debe introducirlos en orden de atrás hacia  adelante. </h4>" +
      "<h4>¿Vamos a intentarlo?</h4>" +
      "<h4>Pulse cualquier tecla para seguir</h4>" +
      "<hr>" +
      "<p>Agora, você verá mais alguns números</p>" +
      "<p>Desta vez, quando terminar, você deve digitá-los de trás para frente. </p>" +
      "<p>Vamos tentar?</p>" +
      "<p>Pressione qualquer tecla para continuar.</p>",
    choices: "ALL_KEYS",
    data: { part: "instructions" },
  };
}

// Function to create a practice trial
function createPracticeTrial(sequence) {
  let pratice_tries = 0;
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
      pratice_tries++;
      const trialsData = data.values();
      const responseTrialData = trialsData[trialsData.length - 2];
      if (pratice_tries == 2) {
        return false;
      }
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

// Function to add levels to the timeline
function addInwardTrials() {
  inward_score = 0;
  max_inward_sequence = 0;

  // Initial trial
  timeline.push(...createLevel(1, true).timeline);

  for (let inward_index = 2; inward_index <= 8; inward_index++) {
    timeline.push(createLevel(inward_index, true));
  }
}

// Function to generate the final score display dynamically
function resultsTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      return `
                <p>Pontos ordem direta: ${direct_score}</p>
                <p>Pontos ordem inversa: ${inward_score}</p>
                <p>Sequência Maior de Dígitos de Ordem Direta: ${max_direct_sequence}</p>
                <p>Sequência Maior de Dígitos de Ordem Inversa: ${max_inward_sequence}</p>
            `;
    },
    on_finish: function (data) {
      data.participante = participant;
      data.pontos_ordem_direta = direct_score;
      data.pontos_ordem_inversa = inward_score;
      data.maior_sequencia_direta = max_direct_sequence;
      data.maior_sequencia_inversa = max_inward_sequence;
    },
    // choices: "NO_KEYS",
  };
}

function runExperiment() {
  timeline.push(getParticipantId());
  timeline.push(createDirectInstructions());
  addDirectTrials();
  timeline.push(createInwardInstructions());
  timeline.push(createPraticeLevel());
  addInwardTrials();
  timeline.push(resultsTrial());
}

runExperiment();

jsPsych.run(timeline);
