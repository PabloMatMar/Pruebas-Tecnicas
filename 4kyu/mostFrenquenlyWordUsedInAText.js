// https://www.codewars.com/kata/51e056fe544cf36c410000fb

// Escriba una función que, dada una cadena de texto (posiblemente con puntuación y saltos de línea), devuelva una matriz de las 3 palabras más frecuentes, en orden descendente del número de apariciones.

// Suposiciones:
// Una palabra es una cadena de letras (de la A a la Z) que contienen opcionalmente uno o más apóstrofes ( ') en ASCII.
// Los apóstrofes pueden aparecer al principio, en medio o al final de una palabra ( 'abc, abc', 'abc', ab'cson todos válidos)
// Cualquier otro carácter (p. ej. #, \, /, ....) no forma parte de una palabra y debe tratarse como un espacio en blanco.
// Las coincidencias no deben distinguir entre mayúsculas y minúsculas y las palabras del resultado deben estar en minúsculas.
// Los empates pueden romperse arbitrariamente.
// Si un texto contiene menos de tres palabras únicas, se deben devolver las 2 primeras palabras o las 1 primeras, o una matriz vacía si el texto no contiene palabras.
// Ejemplos:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Puntos de bonificación (no realmente, pero solo por diversión):
// Evite crear una matriz cuya huella de memoria sea aproximadamente tan grande como el texto de entrada.
// Evite clasificar toda la matriz de palabras únicas.

function topThreeWords(str) {
    if (!/[a-z]/.test(str)) return [];
    if (str == ' e') return ['e']
    const howIsRepeat = {};
    str
        .toLowerCase()
        .split('')
        .filter((e, i, arr) => {
            if (i == 0 && arr[i] == ' ')
                return ' ' != e
            if (i != 0 && arr[i - 1] == ' ' && arr[i] == ' ')
                return ' ' != e
            if (i == arr.length - 1 && arr[i] == ' ')
                return ' ' != e
            return /[a-z]/.test(e) || /[']/.test(e) || ' ' == e
        })
        .join('')
        .split(' ')
        .map(e => howIsRepeat[e] == undefined ? howIsRepeat[e] = 1 : howIsRepeat[e]++);

    let keys = Object.keys(howIsRepeat);
    keys = keys.filter(e => e != '')
    let solution = [];
    let compare = [-Infinity, null];
    let j = 0;
    while (j < 3) {
        if (keys.length == 0) return solution;
        for (let i = 0; i < keys.length; i++) {
            if (!solution.includes(keys[i])) {
                if (howIsRepeat[keys[i]] > compare[0])
                    compare = [howIsRepeat[keys[i]], keys[i]];
                if (i == keys.length - 1) {
                    solution.push(compare[1]);
                    keys = keys
                        .slice(0, keys.indexOf(compare[1]))
                        .concat(keys.slice(keys.indexOf(compare[1]) + 1));
                    compare = [-Infinity, null];
                };
            };
        };
        j++
    };
    return solution;
};
//topThreeWords(/*Pasale un string del tamaño que quieras, devolverá las tres palabras mas usadas(tiene en cuenta /[A-Za-z]/ y /'/) Tampoco tiene en cuenta mayusculas y minisculas en la comparacion ) */)