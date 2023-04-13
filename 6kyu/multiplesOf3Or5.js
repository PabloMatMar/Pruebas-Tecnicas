https://www.codewars.com/kata/514b92a657cdc65150000006

// Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

// Termina la solución para que devuelva la suma de todos los múltiplos de 3 o 5 por debajo del número pasado. Además, si el número es negativo, devuelve 0 (para los idiomas que los tienen).

// Nota: si el número es un múltiplo de 3 y 5, solo cuéntelo una vez .

// Cortesía de projecteuler.net ( Problema 1 )

//Con metodos:

function solution(number) {
    if (number <= 0) return 0;
    let solution = [];
    let iV = 0;
    for (let i = 1; i < number; i++) {
        if (Number.isInteger(i / 3)) solution.push(i);
        else if (Number.isInteger(i / 5)) solution.push(i);
    }
    return solution
        .filter((element, i, arr) => arr.indexOf(element) === i)
        .reduce((a, c) => a + c, iV);
}

//Sin metodos:

function solution(number) {
    var sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}

//solution(/*Pasale un numero y devolvera la suma de todos numeros menores que ese numero y que ademas sean multiplos de tres o de cinco*/)