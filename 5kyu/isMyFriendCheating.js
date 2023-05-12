// https://www.codewars.com/kata/5547cc7dcad755e480000004

// Un amigo mío toma la secuencia de todos los números del 1 al n (donde n > 0).
// Dentro de esa secuencia, elige dos números, a y b.
// Él dice que el producto de a y b debe ser igual a la suma de todos los números en la secuencia, excluyendo a y b.
// Dado un número n, ¿podría decirme los números que excluyó de la secuencia?
// La función toma el parámetro: n (n siempre es estrictamente mayor que 0) y devuelve una matriz o una cadena (según el idioma) de la forma:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// con todos (a, b) los cuales son los posibles números eliminados en la secuencia 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... se ordenarán en orden creciente de la "a".

// Sucede que hay varios posibles (a, b). La función devuelve una matriz vacía (o una cadena vacía) si no se encuentran números posibles.
// removeNb(26) should return [[15, 21], [21, 15]]
// in C:
// removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
// Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 
// Nota
// Ver ejemplos de devoluciones para cada idioma en "EJECUTAR PRUEBAS DE MUESTRA"

const removeNb = (n) => {
    const arr = [];
    let sum = [];
    let solution = [];
    for (let i = 1; i <= n; i++)
        arr.push(i)
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++) {
            sum = arr.reduce((a, b) => a + b, 0) - (arr[i] + arr[j]);
            if (sum / arr[i] == arr[j]) solution.push([[arr[i]], [arr[j]]])
        };
    return solution;
};
//removeNb(/*Pasale un número, devolverá todas las parejas de numeros que encuentre entre n, y 1(inclusives) cuyo
// producto sea la suma de todos los numeros de 1 a n excluyendo los numeros a multiplicar(y a devolver) */)