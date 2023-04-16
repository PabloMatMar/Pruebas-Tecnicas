https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// Tarea
// Se le dará una serie de números. Tienes que ordenar los números impares en orden ascendente y dejar los números pares en sus posiciones originales.

// Ejemplos
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const solution = [];
    let arrOdd = array.filter(odd => !Number.isInteger(odd / 2));
    arrOdd = arrOdd.sort(function (a, b) {
        return a - b;
    });
    let count = 0;
    for (let i = 0; i < array.length; i++)
        Number.isInteger(array[i] / 2) ? solution.push(array[i]) : solution.push(arrOdd[count]) && count++;
    return solution
};
//sortArray(/*Coloca un array de numeros para ver como ordena los impares y deja los pares en su posicion original */);