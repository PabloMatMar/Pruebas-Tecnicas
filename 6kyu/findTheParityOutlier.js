https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// Se le proporciona una matriz (que tendrá una longitud de al menos 3, pero podría ser muy grande)
// que contiene números enteros. La matriz está completamente compuesta por enteros impares
// o completamente compuesta por enteros pares excepto por un solo entero N. 
//Escriba un método que tome la matriz como argumento y devuelva este "valor atípico" N.

// Ejemplos
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
    let odd = integers.filter(e => Number.isInteger(e / 2));
    let pair = integers.filter(e => !Number.isInteger(e / 2));
    return odd.length > pair.length ? pair[0] : odd[0]
}

//findOutlier(/*Pasale un array de numeros, solo uno debe ser par o solo uno debe ser impar, devolverá
//dicho número*/)