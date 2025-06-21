export function criarInstrucoesOrdemDireta() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Essa é uma tarefa de memória.</h4><h4>Repita os números na mesma ordem.</h4><h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { part: "instructions" },
  };
}

export function criarInstrucoesOrdemInversa() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Agora repita de trás para frente.</h4><h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { part: "instructions" },
  };
}
