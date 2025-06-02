// Description: Utility functions for the experiment

// Create a learning grid
function createGrid(grid) {
  return `
            <table>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[0].creature}" alt="Creature1">
                    <img src="${grid[0].object}" class="object" alt="Object1">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[1].creature}" alt="Creature2">
                    <img src="${grid[1].object}" class="object" alt="Object2">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container">
                    <img src="${grid[2].creature}" alt="Creature 3">
                    <img src="${grid[2].object}" class="object" alt="Object3">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${grid[3].creature}" alt="Creature 4">
                    <img src="${grid[3].object}" class="object" alt="Object4">
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
  const objectsDirectory = "assets/objetos_gui/";
  const objectsName = "objeto";
  const totalObjects = 16;
  const objects = [];

  for (let i = 0; i <= totalObjects; i++) {
    const padNum = String(i).padStart(2, "0");
    const file = `${objectsDirectory}${objectsName}${padNum}.png`;
    objects.push(file);
  }
  return objects;
}

// Load creatures
function loadCreatures() {
  const creaturesDirectory = "assets/criaturas/";

  const creaturesAlvoName = "CA "; // Criaturas alvo
  const creaturesNotAlvoName = "CNA "; // Criaturas não alvo
  const creaturesPracticeAlvoName = "CPA "; // Criaturas prática alvo
  const creaturesPracticeNotAlvoName = "CPNA "; // Criaturas prática não alvo

  const totalTestCreatures = 32; // Quantidade de criaturas de teste

  const totalPracticeCreatures = 8; // Quantidade de criaturas de prática

  const creatures = [];

  // Load CA (0 to 31)
  for (let i = 0; i <= 31; i++) {
    const file = `${creaturesDirectory}${creaturesAlvoName}${i}.png`;
    
    creatures.push(file);
  }

  // Load CNA (32 to 64)
  for (let i = 32; i <= 63; i++) {
    const file = `${creaturesDirectory}${creaturesNotAlvoName}${i}.png`;

    creatures.push(file);
  }

  // Load CPA (64 to 71)
  for (let i = 64; i <= 71; i++) {
    const file = `${creaturesDirectory}${creaturesPracticeAlvoName}${i}.png`;
    
    creatures.push(file);
  }

  // Load CPNA (72 to 79)
  for (let i = 72; i <= 79; i++) {
    const file = `${creaturesDirectory}${creaturesPracticeNotAlvoName}${i}.png`;
    creatures.push(file);
  }

  return creatures;
}

// Load audios
function loadAudios() {
  const baseDirectory = "assets/audios_gui/";
  const totalPastas = 4;

  const audios = [];

  // audios.push("assets/audios/1.wav");

  // Etapa 1: carregar treino e teste (32 arquivos cada) para cada pasta 1-4
  for (let p = 1; p <= totalPastas; p++) {
    // Treino
    for (let i = 1; i <= 32; i++) {
      const caminhoTreino = `${baseDirectory}${p}/treino/${i}.wav`;
      audios.push(caminhoTreino);
    }
    // Teste
    for (let i = 1; i <= 32; i++) {
      const caminhoTeste = `${baseDirectory}${p}/teste/${i}.wav`;
      audios.push(caminhoTeste);
    }
  }

  // Etapa 2: carregar pratica/treino e pratica/teste (8 arquivos cada) para cada pasta 1-4
  for (let p = 1; p <= totalPastas; p++) {
    // Pratica/Treino
    for (let i = 1; i <= 8; i++) {
      const caminhoPraticaTreino = `${baseDirectory}${p}/pratica/treino/${i}.wav`;
      audios.push(caminhoPraticaTreino);
    }
    // Pratica/Teste
    for (let i = 1; i <= 8; i++) {
      const caminhoPraticaTeste = `${baseDirectory}${p}/pratica/teste/${i}.wav`;
      audios.push(caminhoPraticaTeste);
    }
  }
  console.log(audios);
  
  return audios;
}

export { createGrid, createTestGrid, loadObjects, loadCreatures, loadAudios };
