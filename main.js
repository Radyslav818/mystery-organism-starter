// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// console.log(mockUpStrand());

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      let randomindex = Math.floor(Math.random() * this.dna.length);
      // console.log(dna[randomindex]);
      // return randomindex;
      if (dna[randomindex] === "A") {
        dnaBase = ["T", "C", "G"];
      }
      if (dna[randomindex] === "T") {
        dnaBase = ["A", "C", "G"];
      }
      if (dna[randomindex] === "C") {
        dnaBase = ["T", "A", "G"];
      }
      if (dna[randomindex] === "G") {
        dnaBase = ["A", "T", "C"];
      }
      dna[randomindex] = dnaBase[Math.floor(Math.random() * 3)][0];
      return dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i <= dna.length; i++) {
        if (dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      let percentage = (count * 100) / dna.length;
      console.log(
        "specimen #1 and specimen #2 have " +
          Math.round(percentage * 100) / 100 +
          "% DNA in common"
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "C" || dna[i] === "G") {
          count++;
        }
      }
      let percentage = (count * 100) / dna.length;
      console.log(percentage);
      if (percentage >= 60) {
        return true;
      }
      return false;
    },
  };
}

let pAequorArmy = [];
let testpAequor;
while (pAequorArmy.length !== 30) {
  testpAequor = pAequorFactory(1, mockUpStrand());
  if (testpAequor.willLikelySurvive()) {
    pAequorArmy.push(testpAequor);
  }
}
console.log(pAequorArmy);

// let pAequor4 = pAequorFactory(1, mockUpStrand());
// let pAequor1 = pAequorFactory(1, mockUpStrand());
// console.log(pAequor4.dna);
// console.log(pAequor1.dna);
// pAequor1.compareDNA(pAequor4);
// console.log(pAequor1.willLikelySurvive());
// console.log(pAequor.dna);
// console.log(pAequor.mutate());
