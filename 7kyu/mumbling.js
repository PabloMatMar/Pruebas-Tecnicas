https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Esta vez sin historia, sin teoría. Los siguientes ejemplos le muestran cómo escribir la función accum:

// Ejemplos:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// El parámetro de accum es una cadena que incluye solo letras de a..zy A..Z.

function accum(s) {
    let minus = s.toLowerCase();
    let accum = minus[0].toUpperCase();
    let solution = [];
    let arrLetters = minus.split('');

    for (let i = 0; i < arrLetters.length; i++) {
        for (let j = 0; j < i; j++) {
            const initialValue = arrLetters[i].toUpperCase();
            j === 0 ? accum = "-" + initialValue + arrLetters[i] : accum = accum + arrLetters[i];
        };
        solution.push(accum);
    }

    return solution.join('');
};

// accum(/*Pasale un string para que veas como pone cada caracter del mismo en mayuscula y le concatena el mismo tantas veces como corresponda a su indice */)
