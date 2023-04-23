https://www.codewars.com/kata/5287e858c6b5a9678200083c

// Un Número Narcisista (o Número de Armstrong) es un número positivo que es la suma de sus propios
// dígitos, cada uno elevado a la potencia del número de dígitos en una base dada. En este Kata,
// nos limitaremos al decimal (base 10).

// Por ejemplo, tome 153 (3 dígitos), que es narcisista:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// y 1652 (4 dígitos), que no es:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// El reto:

// Su código debe devolver verdadero o falso.

// No se requiere la verificación de errores para cadenas de texto u otras entradas no válidas, solo se
// pasarán a la función números enteros positivos distintos de cero válidos.

// ALGORITMOS


function narcissistic(value) {
    let iV = 0;
    return value
        .toString()
        .split('')
        .map((e, i, arr) => e ** arr.length)
        .reduce((a, b) => a + b, iV)
        === value ? true : false
};

//narcissistic(/*Pásale un número y sumara cada uno de sus digitos elevedos a la longitud del numero, si
//la suma de todos esos numeros es igual al numero original devolverá true, si no false (no pasar de la
// de longitud 10) */)