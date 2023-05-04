// https://www.codewars.com/kata/51edd51599a189fe7f000015

// Completa la función que

// acepta dos matrices enteras de igual longitud
// compara el valor de cada miembro en una matriz con el miembro correspondiente en la otra
// eleva al cuadrado la diferencia de valor absoluto entre esos dos valores
// y devuelve el promedio de la diferencia de valor absoluto al cuadrado entre cada par de miembros.
// Ejemplos
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

const solution = (firstArray, secondArray) => {
    return firstArray
        .map((e, i) => (e - secondArray[i]) ** 2)
        .reduce((a, b) => a + b, 0)
        / firstArray.length;
};
//solution(/*Pásale dos arrays cuyos elementos sean numeros, calculará la diferencia entre elementos indexados iguales, elevará al cuadrado dicha diferencia, las sumara todas y devolverá el promedio */)