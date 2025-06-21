import { jsPsych } from "./config.js";
import { TEMPO_FEEDBACK } from "./config.js";

export function trialFeedback() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus() {
      const ultimo = jsPsych.data.get().last(1).values()[0];
      return ultimo.correto ? "<h4>Correto!</h4>" : "<h4>Incorreto!</h4>";
    },
    trial_duration: TEMPO_FEEDBACK,
    choices: "NO_KEYS",
    data: { type: "feedback" },
  };
}

export function trialFeedbackPratica(sequencia) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus() {
      const ultimoTeste = jsPsych.data.get().last(1).values()[0];
      return ultimoTeste.correto
        ? "<h4>Muito bem.</h4>"
        : `<h4>Não exatamente. A sequência era ${sequencia[0]} - ${sequencia[1]}.</h4>
            <h4>Então, na ordem de trás para frente, você deve digitar ${sequencia[1]} - ${sequencia[0]}.</h4>
            <h4>Vamos tentar novamente.</h4>
            <h4>Pressione qualquer tecla para continuar.</h4>`;
    },
    trial_duration: TEMPO_FEEDBACK,
    choices: "NO_KEYS",
    data: { type: "feedback" },
  };
}

export function trialFeedbackPraticaDireta(sequencia) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus() {
      const ultimoTeste = jsPsych.data.get().last(1).values()[0];
      return ultimoTeste.correto
        ? "<h4>Muito bem.</h4>"
        : `<h4>Não exatamente. A sequência era ${sequencia[0]} - ${sequencia[1]}.</h4>
            <h4>Você deve digitá-la na mesma ordem.</h4>
            <h4>Vamos tentar novamente.</h4>
            <h4>Pressione qualquer tecla para continuar.</h4>`;
    },
    trial_duration: TEMPO_FEEDBACK,
    choices: "NO_KEYS",
    data: { type: "feedback" },
  };
}

export function trialFeedbackPraticaIntermediaria() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Vamos tentar mais uma vez?</h4><h4>Lembre-se que você deve digitar os números de trás para frente.</h4><h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

export function trialFeedbackPosPratica() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Vamos começar!</h4><h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}
