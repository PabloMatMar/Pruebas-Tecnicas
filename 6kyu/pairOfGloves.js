https://www.codewars.com/kata/58235a167a8cb37e1a0000db

// Par de guantes
// Se acerca el invierno, debes preparar tus vacaciones de esquí. El objetivo de este kata es determinar el número de pares de guantes que puedes formar con los guantes que tienes en tu cajón.

// Dada una matriz que describe el color de cada guante, devuelva el número de pares que puede formar, asumiendo que solo los guantes del mismo color pueden formar pares.

// Ejemplos:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves) {
    let count = {};
    let solution = 0;
    gloves.map((e) => count[e] === undefined ? count[e] = 1 : count[e]++);
    for (let key in count) {
        if (count[key] % 2 !== 0) count[key]--;
        solution = solution + count[key] / 2;
    };
    return solution;
};

//numberOfPairs(/*Pasale un array de strings que se repitan(colores si quieres) por cada par de veces que se repita un string añadira uno al total de la solucion */)