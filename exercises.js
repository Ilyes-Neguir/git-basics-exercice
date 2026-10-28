function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}

function redundant(str) {
  return function () {
    return str;
  };
}

function getNotesDistribution(students) {
  const distribution = {};

  for (let i = 0; i < students.length; i++) {
    const notes = students[i].notes;

    for (let j = 0; j < notes.length; j++) {
      const note = notes[j];

      if (note >= 1 && note <= 5) {
        distribution[note] = (distribution[note] || 0) + 1;
      }
    }
  }

  return distribution;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    bitwiseAND,
    bitwiseOR,
    bitwiseXOR,
    redundant,
    getNotesDistribution
  };
}

if (typeof window !== "undefined") {
  window.bitwiseAND = bitwiseAND;
  window.bitwiseOR = bitwiseOR;
  window.bitwiseXOR = bitwiseXOR;
  window.redundant = redundant;
  window.getNotesDistribution = getNotesDistribution;
}
