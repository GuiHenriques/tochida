// Sequences

const sequences = [
  [
    ["2", "9"],
    ["4", "6"],
  ],
  [
    ["3", "8", "6"],
    ["6", "1", "2"],
  ],
  [
    ["3", "4", "1", "7"],
    ["6", "1", "5", "8"],
  ],
  [
    ["8", "4", "2", "3", "9"],
    ["5", "2", "1", "8", "6"],
  ],
  [
    ["3", "8", "9", "1", "7", "4"],
    ["7", "9", "6", "4", "8", "3"],
  ],
  [
    ["5", "1", "7", "4", "2", "3", "8"],
    ["9", "8", "5", "2", "1", "6", "3"],
  ],
  [
    ["1", "8", "4", "5", "9", "7", "6", "3"],
    ["2", "9", "7", "6", "3", "1", "5", "4"],
  ],
  [
    ["5", "3", "8", "7", "1", "2", "4", "6", "9"],
    ["4", "2", "6", "9", "1", "7", "8", "3", "5"],
  ],
];

const backwardSequences = [
  [
    ["8", "2"],
    ["5", "6"],
  ],
  [
    ["2", "1"],
    ["1", "3"],
  ],
  [
    ["3", "5"],
    ["6", "4"],
  ],
  [
    ["5", "7", "4"],
    ["2", "5", "9"],
  ],
  [
    ["7", "2", "9", "6"],
    ["8", "4", "9", "3"],
  ],
  [
    ["4", "1", "3", "5", "7"],
    ["9", "7", "8", "5", "2"],
  ],
  [
    ["1", "6", "5", "2", "9", "8"],
    ["3", "6", "7", "1", "9", "4"],
  ],
  [
    ["8", "5", "9", "2", "3", "4", "6"],
    ["4", "5", "7", "9", "2", "8", "1"],
  ],
  [
    ["6", "9", "1", "7", "3", "2", "5", "8"],
    ["3", "1", "7", "9", "5", "4", "8", "2"],
  ],
];

// Helper functions
function getSequences(index) {
  if (index < 0 || index >= sequences.length) {
    throw new Error("Index out of bounds");
  }
  const [s1, s2] = sequences[index];
  return { s1, s2 };
}

function validateResponse(sequence, response) {
  return JSON.stringify(sequence) === JSON.stringify(response);
}

function getBackwardSequences(index) {
  if (index < 0 || index >= backwardSequences.length) {
    throw new Error("Index out of bounds");
  }
  const [s1, s2] = backwardSequences[index];
  return { s1, s2 };
}

function validateBackwardResponse(sequence, response) {
  if (sequence.length !== response.length) {
    return false;
  }
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== response[sequence.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function saveData(results, filename) {
  const blob = new Blob([results], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export {getSequences, getBackwardSequences, validateResponse, validateBackwardResponse, saveData};