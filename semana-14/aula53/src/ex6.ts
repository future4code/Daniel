type RnaMap = {
    [index: string]: string
}

const rnaMap: RnaMap = {
    A: "U",
    T: "A",
    C: "G",
    G: "C"
}

function dnaToRna(dna: string): string {
    return dna.split('').map(base => rnaMap[base]).join('');
}

console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"));