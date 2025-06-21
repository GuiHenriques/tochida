import {
  TEMPO_PREPARACAO,
  TEMPO_EXIBICAO_DIGITO,
  jsPsych,
  score,
} from "./config.js";
import { validateResponse, validateBackwardResponse } from "./utils.js";

export function trialPreparacao() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h4>Memorize a sequência</h4>",
    choices: "NO_KEYS",
    trial_duration: TEMPO_PREPARACAO,
    data: { type: "pre-trial" },
  };
}

export function trialDigito(digito) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style=\"font-size:48px\">${digito}</div>`,
    choices: "NO_KEYS",
    trial_duration: TEMPO_EXIBICAO_DIGITO,
    data: { type: "digit" },
  };
}

export function trialResposta(sequencia, inversa = false) {
  let resposta_usuario = [];

  const html_stimulus = `
      <h4>Digite a sequência:</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 150px; margin: 0 auto;">
        ${Array.from(
          { length: 9 },
          (_, i) =>
            `<button class=\"digit-button jspsych-btn\" data-digit=\"${
              i + 1
            }\" style=\"font-size: 24px; padding: 10px;\">${i + 1}</button>`
        ).join("")}
      </div>
      <div id="resposta" style="height: 24px; font-size: 24px; margin: 20px 0;"></div>
      <div style="display: flex; justify-content: space-between; gap: 50px">
        <button id="botao-limpar" class="jspsych-btn" style="padding: 7px">
          <span style="display: inline-block; vertical-align: middle; font-size: 14px">Apagar</span>
          <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle;">backspace</span>
        </button>
        <button id="botao-enviar" class="jspsych-btn" style="padding: 7px">
          <span style="display: inline-block; vertical-align: middle; font-size: 16px">Continuar</span>
          <span class="material-symbols-outlined" style="display: inline-block; vertical-align: middle;">arrow_forward</span>
        </button>
      </div>`;

  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: html_stimulus,
    choices: "NO_KEYS",
    data: { type: "resposta" },
    on_load() {
      document.querySelectorAll(".digit-button").forEach((b) =>
        b.addEventListener("click", () => {
          resposta_usuario.push(b.getAttribute("data-digit"));
          document.getElementById("resposta").textContent =
            resposta_usuario.join(" ");
        })
      );
      document.getElementById("botao-limpar").addEventListener("click", () => {
        resposta_usuario.pop();
        document.getElementById("resposta").textContent =
          resposta_usuario.join(" ");
      });
      document
        .getElementById("botao-enviar")
        .addEventListener("click", () =>
          jsPsych.finishTrial({ response: resposta_usuario })
        );
    },
    on_finish(data) {
      data.resposta_usuario = resposta_usuario;
      if (inversa) {
        data.correto = validateBackwardResponse(sequencia, resposta_usuario);
        if (data.correto) {
          score.pontuacao_inversa++;
          score.maior_sequencia_inversa = sequencia.length;
        }
      } else {
        data.correto = validateResponse(sequencia, resposta_usuario);
        if (data.correto) {
          score.pontuacao_direta++;
          score.maior_sequencia_direta = sequencia.length;
        }
      }
      resposta_usuario = [];
    },
  };
}
