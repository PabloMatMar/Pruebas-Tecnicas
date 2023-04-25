https://www.codewars.com/kata/52c31f8e6605bcc646000082

// Escribe una función que tome una matriz de números (enteros para las pruebas) y un número objetivo.
// Debería encontrar dos elementos diferentes en la matriz que, cuando se suman, den el valor objetivo.
// Los índices de estos elementos deben devolverse en una tupla / lista (dependiendo de su idioma) así:
// (index1, index2).

// A los efectos de este kata, algunas pruebas pueden tener múltiples respuestas; se aceptarán todas las
// soluciones válidas.

// La entrada siempre será válida (los números serán una matriz de longitud 2 o mayor, y todos los
// elementos serán números; el objetivo siempre será la suma de dos elementos diferentes de esa matriz).


function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && i !== j) return [i, j]
        };
    };
};
//twoSum(/*Pásale como primer parametro un array de numeros, y como segundo un número que sea la suma de
// dos de los numeros en el array, devolvera el indice de dichos numeros*/)