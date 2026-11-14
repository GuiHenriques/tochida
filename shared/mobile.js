// Ajustes para celular compartilhados pelas tarefas (aprendizado, memória e tradução).
// Carregar DEPOIS do jsPsych e do plugin-fullscreen, e ANTES do script da tarefa.
(function () {
  // Toque só vale depois de TAP_DELAY ms, para evitar pular a tela sem querer.
  const TAP_DELAY = 500;

  // A versão PT-ES tem instruções bilíngues (espanhol + português).
  const BILINGUE = /\/pt-es\//.test(location.pathname);

  function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  // Permite avançar telas de teclado (ALL_KEYS) também com clique ou toque.
  // Uso: { type: jsPsychHtmlKeyboardResponse, choices: "ALL_KEYS", ...tapToContinue(jsPsych) }
  window.tapToContinue = function (jsPsych) {
    let timer = null;
    let startTime = 0;

    const advance = () => {
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.getDisplayElement().innerHTML = "";
      jsPsych.finishTrial({
        rt: Math.round(performance.now() - startTime),
        response: "tap",
      });
    };

    return {
      on_load: () => {
        startTime = performance.now();
        timer = setTimeout(() => {
          document.addEventListener("click", advance, { once: true });
        }, TAP_DELAY);
      },
      on_finish: () => {
        clearTimeout(timer);
        document.removeEventListener("click", advance);
      },
    };
  };

  // Tela cheia: só em celular/tablet (tela de toque) e em navegadores que suportam.
  // No iPhone o Safari não permite tela cheia em páginas, então a etapa é pulada.
  window.fullscreenStep = function () {
    const message = BILINGUE
      ? "<p>La tarea se mostrará en pantalla completa.</p>" +
        "<p>Toque el botón de abajo para continuar.</p><hr>" +
        "<p>A tarefa será exibida em tela cheia.</p>" +
        "<p>Toque no botão abaixo para continuar.</p>"
      : "<p>A tarefa será exibida em tela cheia.</p>" +
        "<p>Toque no botão abaixo para continuar.</p>";

    return {
      timeline: [
        {
          type: jsPsychFullscreen,
          fullscreen_mode: true,
          message: message,
          button_label: "Continuar",
          delay_after: 300,
        },
      ],
      conditional_function: () =>
        isTouchDevice() && document.fullscreenEnabled === true,
    };
  };

  window.exitFullscreen = function () {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Aviso para girar o celular (texto exibido por mobile.css)
  document.documentElement.setAttribute(
    "data-rotate-msg",
    BILINGUE
      ? "Por favor, gire o celular para a posição vertical.\nPor favor, gire el celular a la posición vertical."
      : "Por favor, gire o celular para a posição vertical."
  );
})();
