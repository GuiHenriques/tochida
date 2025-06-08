// Importação das funções utilitárias que auxiliam na geração e validação das sequências
import {
  getSequences,
  getBackwardSequences,
  validateResponse,
  validateBackwardResponse,
} from "./utils.js";

// CONSTANTES
// Tempo de preparação antes de cada sequência
let tempo_preparacao = 2000;

// Tempo de exibição do feedback de acerto/erro
let tempo_feedback = 1500;

// Tempo de exibição de cada dígito
let tempo_exibicao_digito = 1000;

// VARIÁVEIS
let timeline = [];
let participante = "";
let pontuacao_direta = 0;
let pontuacao_inversa = 0;
let maior_sequencia_direta = 0;
let maior_sequencia_inversa = 0;

// Inicialização do jsPsych com função ao final do experimento para salvar dados
const jsPsych = initJsPsych({
  on_finish: function () {
    let id_participante = jsPsych.data
      .get()
      .filter({ part: "participant_id" })
      .values()[0].response.id;
    console.log("ID do Participante:", id_participante);

    let nome_arquivo = `memoria_${id_participante}.csv`;

    jsPsych.data
      .get()
      .last(2)
      .filterColumns([
        "participante",
        "pontos_ordem_direta",
        "pontos_ordem_inversa",
        "maior_sequencia_direta",
        "maior_sequencia_inversa",
      ])
      .localSave("csv", nome_arquivo);
  },
});

// Função para capturar o ID do participante
function obterIdParticipante() {
  return {
    type: jsPsychSurveyText,
    questions: [
      { prompt: "<h3>ID do participante</h3>", name: "id", columns: 20 },
    ],
    button_label: "Continuar",
    data: { part: "participant_id" },
    on_finish: function (data) {
      participante = data.response.id;
    },
  };
}

// Instruções para sequência direta
function criarInstrucoesOrdemDireta() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Essa é uma tarefa de memória.</h4>" +
      "<h4>Alguns números aparecerão na tela, observe com atenção. Assim que terminar, repita a sequência.</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { part: "instructions" },
  };
}

// Função para criar a etapa de preparação antes de cada sequência
function trialPreparacao() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h4>Memorize a sequência</h4>",
    choices: "NO_KEYS",
    trial_duration: tempo_preparacao,
    data: { type: "pre-trial" },
  };
}

// Função para criar uma etapa de exibição de dígito
function trialDigito(digito) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:48px">${digito}</div>`,
    choices: "NO_KEYS",
    trial_duration: tempo_exibicao_digito,
    data: { type: "digit" },
  };
}

// Função para criar uma etapa de resposta do participante
function trialResposta(sequencia, inversa = false) {
  let resposta_usuario = [];

  let html_stimulus = `
      <h4>Digite a sequência:</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 150px; margin: 0 auto;">
        ${Array.from(
          { length: 9 },
          (_, i) =>
            `<button class="digit-button jspsych-btn" data-digit="${
              i + 1
            }" style="font-size: 24px; padding: 10px;">${i + 1}</button>`
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
      </div>
    `;

  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: html_stimulus,
    choices: "NO_KEYS",
    data: { type: "resposta" },
    on_load: function () {
      document.querySelectorAll(".digit-button").forEach((button) => {
        button.addEventListener("click", function () {
          let digito = this.getAttribute("data-digit");
          resposta_usuario.push(digito);
          document.getElementById("resposta").textContent =
            resposta_usuario.join(" ");
        });
      });
      document
        .getElementById("botao-limpar")
        .addEventListener("click", function () {
          resposta_usuario.pop();
          document.getElementById("resposta").textContent =
            resposta_usuario.join(" ");
        });
      document
        .getElementById("botao-enviar")
        .addEventListener("click", function () {
          jsPsych.finishTrial({
            response: resposta_usuario,
          });
        });
    },
    on_finish: function (data) {
      data.resposta_usuario = resposta_usuario;
      if (inversa) {
        data.correto = validateBackwardResponse(sequencia, resposta_usuario);

        if (data.correto) {
          pontuacao_inversa++;
          maior_sequencia_inversa = sequencia.length;
        }
      } else {
        data.correto = validateResponse(sequencia, resposta_usuario);
        if (data.correto) {
          pontuacao_direta++;
          maior_sequencia_direta = sequencia.length;
        }
      }
      resposta_usuario = [];
    },
  };
}

// Função para criar o feedback de resposta correta ou incorreta
function trialFeedback() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const ultimoTeste = jsPsych.data.get().last(1).values()[0];
      return ultimoTeste.correto
        ? "<h4>Correto!</h4>"
        : "<h4>Incorreto!</h4>";
    },
    trial_duration: tempo_feedback,
    choices: "NO_KEYS",
    data: { type: "feedback" },
  };
}

// Função para criar o feedback durante o nível de prática
function trialFeedbackPratica(sequencia) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const ultimoTeste = jsPsych.data.get().last(1).values()[0];
      return ultimoTeste.correto
        ? "<h4>Muito bem.</h4>"
        : `<h4>Não exatamente. A sequência era ${sequencia[0]} - ${sequencia[1]}.</h4>
            <h4>Então, na ordem de trás para frente, você deve digitar ${sequencia[1]} - ${sequencia[0]}.</h4>
            <h4>Vamos tentar novamente.</h4>
            <h4>Pressione qualquer tecla para continuar.</h4>`;
    },
    // choices: "NO_KEYS",
    // trial_duration: tempo_feedback,
    data: { type: "feedback" },
  };
}

// Função para criar um bloco de feedback de prática intermediária
function trialFeedbackPraticaIntermediaria() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Vamos tentar mais uma vez?</h4>" +
      "<h4>Lembre-se que você deve digitar os números de trás para frente.</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

// Função para criar um bloco de feedback após a prática
function trialFeedbackPosPratica() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Vamos começar!</h4>" +
      "<h4>Pressione qualquer tecla para continuar.</h4>",
    choices: "ALL_KEYS",
    data: { type: "feedback" },
  };
}

// Função para criar um bloco de nível condicional
function criarNivel(indice, ordemInversa = false) {
  let s1, s2;

  // Obtém as sequências para o nível atual
  if (!ordemInversa) {
    ({ s1, s2 } = getSequences(indice));
  } else {
    ({ s1, s2 } = getBackwardSequences(indice));
  }

  // Cria um trial de preparação antes de exibir os dígitos
  const preTrial = trialPreparacao();

  // Cria os trials de exibição dos dígitos para cada sequência
  const digitosSequencia1 = s1.map((digito) => trialDigito(digito));
  const digitosSequencia2 = s2.map((digito) => trialDigito(digito));

  // Cria os trials de resposta para cada sequência
  const respostaSequencia1 = trialResposta(s1, ordemInversa);
  const respostaSequencia2 = trialResposta(s2, ordemInversa);

  // Cria o bloco de feedback para o nível
  const feedback = trialFeedback();

  return {
    timeline: [
      preTrial,
      ...digitosSequencia1,
      respostaSequencia1,
      feedback,
      preTrial,
      ...digitosSequencia2,
      respostaSequencia2,
      feedback,
    ],
    // Função condicional para repetir o nível se a resposta estiver incorreta
    conditional_function: function () {
      const contadorCorretos = jsPsych.data
        .get()
        .filter({ type: "resposta" })
        .last(2)
        .filter({ correto: true })
        .count();

      return contadorCorretos > 0;
    },
  };
}

// Função para adicionar níveis à linha do tempo para a fase de "ordem direta"
function ordemDireta() {
  // Instruções iniciais para a fase de ordem direta
  timeline.push(criarInstrucoesOrdemDireta());

  // Adiciona o trial inicial (primeiro nível)
  timeline.push(...criarNivel(0).timeline);

  // Adiciona os níveis subsequentes de ordem direta, do índice 1 até o 7
  for (let indice_direto = 1; indice_direto <= 7; indice_direto++) {
    timeline.push(criarNivel(indice_direto));
  }
}

// Função para criar instruções para a fase "ordem inversa"
function criarInstrucoesOrdemInversa() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<h4>Agora, você verá mais alguns números.</h4>" +
      "<h4>Desta vez, quando terminar, você deve introduzi-los em ordem inversa (de trás para frente).</h4>" +
      "<h4>Vamos tentar?</h4>" +
      "<h4>Pressione qualquer tecla para continuar</h4>",
    choices: "ALL_KEYS",
    data: { parte: "instrucoes" },
  };
}

// Função para criar um teste prático com uma sequência de dígitos
function criarTentativaPratica(sequencia) {
  let tentativasPratica = 0; // Conta o número de tentativas na prática
  const preTrial = trialPreparacao(); // Apresentação inicial antes da sequência

  // Cria os trials de dígitos da sequência prática
  const digitosPratica = sequencia.map((digito) => trialDigito(digito));
  const respostaPratica = trialResposta(sequencia, true); // Permite resposta em ordem inversa
  const feedback = trialFeedbackPratica(sequencia); // Feedback após a resposta

  return {
    timeline: [preTrial, ...digitosPratica, respostaPratica, feedback],
    // Função para repetir o trial se a resposta estiver incorreta até 2 tentativas
    loop_function: function (data) {
      tentativasPratica++;
      const dadosTrials = data.values();
      const dadosResposta = dadosTrials[dadosTrials.length - 2];
      if (tentativasPratica === 2) {
        return false; // Se já houver 2 tentativas, para o loop
      }
      return !dadosResposta.correct; // Continua o loop se a resposta estiver incorreta
    },
  };
}

// Função para criar a fase completa de prática
function criarFasePratica() {
  let s1, s2;

  // Obtém duas sequências para prática em ordem inversa
  ({ s1, s2 } = getBackwardSequences(0));

  // Cria os trials de prática e feedback para cada sequência
  const pratica1 = criarTentativaPratica(s1);
  const feedbackIntermediario = trialFeedbackPraticaIntermediaria();
  const pratica2 = criarTentativaPratica(s2);
  const feedbackFinal = trialFeedbackPosPratica();

  return {
    timeline: [pratica1, feedbackIntermediario, pratica2, feedbackFinal],
  };
}

// Função para adicionar níveis ao timeline para a fase de ordem inversa
function ordemInversa() {
  // Instruções para a fase de ordem inversa
  timeline.push(criarInstrucoesOrdemInversa());

  // Prática
  timeline.push(criarFasePratica());

  // Inicialização das variáveis de pontuação e sequência máxima
  pontuacao_inversa = 0;
  maior_sequencia_inversa = 0;

  // Primeira tentativa inicial
  timeline.push(...criarNivel(1, true).timeline);

  // Adiciona mais níveis, variando o índice para aumentar a dificuldade
  for (let indiceInverso = 2; indiceInverso <= 8; indiceInverso++) {
    timeline.push(criarNivel(indiceInverso, true));
  }
}

// Função para gerar dinamicamente a exibição de resultados finais
function exibirResultadoFinal() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      return `
                <h4>Pontos em ordem direta: ${pontuacao_direta}</h4>
                <h4>Pontos em ordem inversa: ${pontuacao_inversa}</h4>
                <h4>Maior sequência em ordem direta: ${maior_sequencia_direta}</h4>
                <h4>Maior sequência em ordem inversa: ${maior_sequencia_inversa}</h4>
            `;
    },
    // Salva os dados de pontuação e sequência máxima ao final
    on_finish: function (data) {
      data.participante = participante;
      data.pontos_ordem_direta = pontuacao_direta;
      data.pontos_ordem_inversa = pontuacao_inversa;
      data.maior_sequencia_direta = maior_sequencia_direta;
      data.maior_sequencia_inversa = maior_sequencia_inversa;
    },
  };
}

// Função de agradecimento ao participante ao final do experimento
function trialAgradecimento() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<div style='text-align: center; width: 80%; margin: auto;'>" +
      "<h4>Obrigado!</h4>" +
      "</div>",
  };
}

// Função principal para executar o experimento completo
function executarExperimento() {
  timeline.push(obterIdParticipante());

  // Executa os trials de ordem direta
  ordemDireta();

  // Executa os trials de ordem inversa
  ordemInversa();

  timeline.push(exibirResultadoFinal()); // Exibe o resultado final com pontuações
  timeline.push(trialAgradecimento()); // Exibe a mensagem de agradecimento
}

executarExperimento(); // Inicializa a execução do experimento

jsPsych.run(timeline); // Inicia o experimento no jsPsych
