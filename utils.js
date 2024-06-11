// Description: Utility functions for the experiment

// Create a grid of images
function createImageTable(trial) {
  return `
            <table>
              <tr>
                <td>
                  <div class="container">
                    <img src="${trial.square1.creature}" alt="Creature1">
                    <img src="${trial.square1.object}" alt="Object1">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${trial.square2.creature}" alt="Creature2">
                    <img src="${trial.square2.object}" alt="Object2">
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="container">
                    <img src="${trial.square3.creature}" alt="Creature 3">
                    <img src="${trial.square3.object}" alt="Object 3">
                  </div>
                </td>
                <td>
                  <div class="container">
                    <img src="${trial.square4.creature}" alt="Creature 4">
                    <img src="${trial.square4.object}" alt="Object 4">
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

export { createImageTable, loadObjects, loadCreatures };