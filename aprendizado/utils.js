// Description: Utility functions for the experiment

// Create a learning grid
function createGrid(grid) {
  return `
            <table>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[0].creature}" alt="Creature1">
                    <img src="${grid[0].object}" alt="Object1">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[1].creature}" alt="Creature2">
                    <img src="${grid[1].object}" alt="Object2">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[2].creature}" alt="Creature 3">
                    <img src="${grid[2].object}" alt="Object 3">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[3].creature}" alt="Creature 4">
                    <img src="${grid[3].object}" alt="Object 4">
                  </div>
                </td>
              </tr>
            </table>
          `;
}

// Create test grid
function createTestGrid(grid) {
  return `
            <table>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[0].creature}" alt="Creature1">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[1].creature}" alt="Creature2">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[2].creature}" alt="Creature 3">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[3].creature}" alt="Creature 4">
                  </div>
                </td>
              </tr>
            </table>
          `;
}

// Load objects
function loadObjects() {
  const objectsDirectory = "assets/objetos/";
  const objectsName = "objeto";
  const totalObjects = 16;
  const objects = [];

  for (let i = 1; i <= totalObjects; i++) {
    const padNum = String(i).padStart(2, "0");
    const file = `${objectsDirectory}${objectsName}${padNum}.png`;
    objects.push(file);
  }

  return objects;
}

// Load creatures
function loadCreatures() {
  const creaturesDirectory = "assets/criaturas/";
  const creaturesAlvoName = "CA ";
  const totalCreaturesAlvo = 32;

  const creaturesNotAlvoName = "CNA ";
  const totalCreaturesNotAlvo = 32;

  const creatures = [];

  for (let i = 1; i <= totalCreaturesAlvo; i++) {
    const file = `${creaturesDirectory}${creaturesAlvoName}${i}.png`;
    creatures.push(file);
  }
  for (let i = 33; i <= totalCreaturesNotAlvo + 32; i++) {
    const file = `${creaturesDirectory}${creaturesNotAlvoName}${i}.png`;
    creatures.push(file);
  }

  return creatures;
}

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

  for (let o = 1; o <= totalOrders; o++) {
    // console.log("Ordem: " + o);
    for (let c = 1; c <= totalConditions; c++) {
      // console.log("Condição: " + c);
      for (let t = 1; t <= totalTrials; t++) { // Aprendizado
        // console.log("Trial: " + t);
        const file_a = `${audiosDirectory}${ordem}${o}${condicao}${c}${aprendizado}${rodada}${t}.mp3`;
        audios.push(file_a);
      }
      for (let t = 1; t <= totalTrials; t++) { // Teste
        const file_b = `${audiosDirectory}${ordem}${o}${condicao}${c}${teste}${rodada}${t}.mp3`;
        audios.push(file_b);
      }
    }
  }

  return audios;
}

export { createGrid, createTestGrid, loadObjects, loadCreatures, loadAudios };
