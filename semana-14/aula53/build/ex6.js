const rnaMap = {
    A: "U",
    T: "A",
    C: "G",
    G: "C"
};
function dnaToRna(dna) {
    return dna.split('').map(base => rnaMap[base]).join('');
}
console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"));
//# sourceMappingURL=ex6.js.map