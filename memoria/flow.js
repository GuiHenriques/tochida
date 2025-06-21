import { timeline, score, state } from "./config.js";
import { criarNivel } from "./niveis.js";
import { criarFasePraticaDireta, criarFasePraticaInversa } from "./pratica.js";
import {
  criarInstrucoesOrdemDireta,
  criarInstrucoesOrdemInversa,
} from "./instrucoes.js";

export function obterIdParticipante() {
  return {
    type: jsPsychSurveyText,
    questions: [
      { prompt: "<h3>ID do participante</h3>", name: "id", columns: 20 },
    ],
    button_label: "Continuar",
    data: { part: "participant_id" },
    on_finish(data) {
      state.participante = data.response.id;
    },
  };
}

function exibirResultadoFinal() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus() {
      return `
        <h4>Pontos em ordem direta: ${score.pontuacao_direta}</h4>
        <h4>Pontos em ordem inversa: ${score.pontuacao_inversa}</h4>
        <h4>Maior sequência direta: ${score.maior_sequencia_direta}</h4>
        <h4>Maior sequência inversa: ${score.maior_sequencia_inversa}</h4>`;
    },
  };
}

function trialAgradecimento() {
  return { type: jsPsychHtmlKeyboardResponse, stimulus: "<h4>Obrigado!</h4>" };
}

function ordemDireta() {
  timeline.push(criarInstrucoesOrdemDireta());
  timeline.push(criarFasePraticaDireta());
  timeline.push(...criarNivel(0).timeline);
  for (let i = 1; i <= 7; i++) timeline.push(criarNivel(i));
}

function ordemInversa() {
  timeline.push(criarInstrucoesOrdemInversa());
  timeline.push(criarFasePraticaInversa());
  timeline.push(...criarNivel(1, true).timeline);
  for (let i = 2; i <= 8; i++) timeline.push(criarNivel(i, true));
}

export function executarExperimento() {
  timeline.push(obterIdParticipante());
  // ordemDireta();
  // ordemInversa();
  // timeline.push(exibirResultadoFinal());
  // timeline.push(trialAgradecimento());
}
