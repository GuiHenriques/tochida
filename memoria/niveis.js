import { getSequences, getBackwardSequences } from "./utils.js";
import { trialPreparacao, trialDigito, trialResposta } from "./trials.js";
import { trialFeedback } from "./feedback.js";
import { jsPsych } from "./config.js";

export function criarNivel(indice, ordemInversa = false) {
  const { s1, s2 } = ordemInversa
    ? getBackwardSequences(indice)
    : getSequences(indice);

  const pre = trialPreparacao();
  const blocos = [
    pre,
    ...s1.map(trialDigito),
    trialResposta(s1, ordemInversa),
    trialFeedback(),
    pre,
    ...s2.map(trialDigito),
    trialResposta(s2, ordemInversa),
    trialFeedback(),
  ];

  return {
    timeline: blocos,
    conditional_function() {
      const acertos = jsPsych.data
        .get()
        .filter({ type: "resposta" })
        .last(2)
        .filter({ correto: true })
        .count();
      return acertos > 0;
    },
  };
}
