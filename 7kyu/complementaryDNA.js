https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// El ácido desoxirribonucleico (ADN) es una sustancia química que se encuentra en el núcleo de las células y lleva las "instrucciones" para el desarrollo y funcionamiento de los organismos vivos.

// En las cadenas de ADN, los símbolos "A" y "T" son complementarios entre sí, como "C" y "G". Su función recibe un lado del ADN (cadena, excepto Haskell); necesitas devolver el otro lado complementario. La hebra de ADN nunca está vacía o no hay ADN en absoluto (de nuevo, a excepción de Haskell).

// Ejemplo: ( entrada --> salida )

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    let arr = []
    for (let i = 0; i < dna.length; i++) {

        if (dna[i] === "T") arr.push("A");
        if (dna[i] === "A") arr.push("T");
        if (dna[i] === "C") arr.push("G");
        if (dna[i] === "G") arr.push("C");   
    }
    return arr.join('')
};

// DNAStrand(/* Pasale un string con letras mayusculas que sean T, A C y G para ver que devuelve la cadena complementaria*/)