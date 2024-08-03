// Load audios
function loadAudios() {
  const audiosDirectory = "assets/audios/";
  const ordem = "Ordem ";
  const condicao = "_Condição ";
  const aprendizado = "_Aprendizado ";
  const teste = "_Teste ";
  const rodada = "Rodada ";

  const totalTrials = 8;
  const totalOrders = 4;
  const totalConditions = 4;

  const audios = [];

  for (let o = 1; o <= totalOrders / 4; o++) {
    // console.log("Ordem: " + o);
    for (let c = 1; c <= totalConditions / 4; c++) {
      // console.log("Condição: " + c);
      for (let t = 1; t <= totalTrials / 4; t++) {
        // console.log("Trial: " + t);
        const file_a = `${audiosDirectory}${ordem}${o}${condicao}${c}${aprendizado}${rodada}${t}.mp3`;
        const file_b = `${audiosDirectory}${ordem}${o}${condicao}${c}${teste}${rodada}${t}.mp3`;
        console.log(file_a);
        console.log(file_b);
        // audios.push(file_a);
        // audios.push(file_b);
      }
    }
  }

  return audios;
}
loadAudios();
