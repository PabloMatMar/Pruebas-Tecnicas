// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

// Dada una matriz de enteros de cualquier longitud, devuelva una matriz que tenga 1 agregado al valor representado por la matriz.

// la matriz no puede estar vacía
// solo se permiten números enteros no negativos de un solo dígito
// Return nil(o el equivalente de su idioma) para entradas no válidas.

// Ejemplos
// Matrices válidas

// [4, 3, 2, 5]volvería [4, 3, 2, 6]
// [1, 2, 3, 9]volvería [1, 2, 4, 0]
// [9, 9, 9, 9]volvería [1, 0, 0, 0, 0]
// [0, 1, 3, 7]volvería[0, 1, 3, 8]

// Matrices no válidas

// [1, -9]no es válido porque no -9es un entero no negativo

// [1, 2, 33]no es válido porque no 33es un número entero de un solo dígito

upArray = arr => {
    if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null;
    let i = arr.length - 1;
    while (i >= 0 && arr[i] == 9)
        arr[i--] = 0;

    i < 0 ? arr.unshift(1) : arr[i]++;
    return arr;
};
//upArray(Pasale un array de numeros, cada uno de un solo digito, positivos, si no lo cumples devolvera
// null, si lo cumples los interpretará como un solo número, le sumará una unidad y devolvera el array 
//[9,9,9] => 999 + 1 => 1000 => [1,0,0,0] )