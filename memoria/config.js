// Constantes de tempo
export const TEMPO_PREPARACAO = 2000;
export const TEMPO_FEEDBACK = 1500;
export const TEMPO_EXIBICAO_DIGITO = 1000;

// Estado global e pontuações (objeto mutável)
export const timeline = [];
export const score = {
  pontuacao_direta: 0,
  pontuacao_inversa: 0,
  maior_sequencia_direta: 0,
  maior_sequencia_inversa: 0,
};
export const state = { participante: "" };

// Instância do jsPsych
export const jsPsych = initJsPsych({
  on_finish() {
    const id_participante = jsPsych.data
      .get()
      .filter({ part: "participant_id" })
      .values()[0].response.id;

    const nome_arquivo = `memoria_${id_participante}.csv`;

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
