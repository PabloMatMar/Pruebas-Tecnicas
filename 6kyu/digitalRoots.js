https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// La raíz digital es la suma recursiva de todos los dígitos de un número.

// Dado n, tome la suma de los dígitos de n. Si ese valor tiene más de un dígito, continúe reduciendo de esta
//manera hasta que se produzca un número de un solo dígito. La entrada será un número entero no negativo.

// Ejemplos
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    const iV = 0;
    let num = n;
    while (num > 9) {
        num = num
            .toString()
            .split('')
            .map(e => Number(e))
            .reduce((a, b) => a + b, iV);
    }
    return num;
};
//digitalRoot(/*Pásale como argumento un número, separará sus digitos, los sumara entre ellos, y lo repetira hasta
//que el numero tenga un solo digito */)