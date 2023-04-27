https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Dada una cadena de palabras, debe encontrar la palabra con la puntuación más alta.

// Cada letra de una palabra puntúa según su posición en el alfabeto: a = 1, b = 2, c = 3etc.

// Por ejemplo, la puntuación de abad es 8(1 + 2 + 1 + 4).

// Debe devolver la palabra con la puntuación más alta como una cadena.

// Si dos palabras tienen la misma puntuación, devuelve la palabra que aparece primero en la cadena
// original.

// Todas las letras serán minúsculas y todas las entradas serán válidas.

function high(x) {
    let arr = x.split(' ');
    let compare = 0;
    let highest = 0;
    let saveWord = "";
    let wordToReturn = "";
    const value = {
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
    };

    for (let i = 0; i < arr.length; i++) {
        saveWord = arr[i]
        let word = arr[i].split('');
        for (let j = 0; j < word.length; j++)
            compare = compare + value[word[j]];


        if (compare > highest) {
            highest = compare;
            wordToReturn = saveWord;
        }
        compare = 0;
    }
    return wordToReturn;
};
//high(/*Pásale un string de palabras, devolverá la palabra cuya suma de letras (teniendo cada letra el
//valor equivalente a su posicion en el alfabeto) sea mas alta */)