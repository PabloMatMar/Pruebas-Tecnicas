https://www.codewars.com/kata/5552101f47fc5178b1000050

// Algunos números tienen propiedades divertidas. Por ejemplo:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Dado un entero positivo n escrito como abcd... (a, b, c, d... siendo dígitos) y un entero positivo p

// queremos encontrar un entero positivo k, si existe, tal que la suma de las cifras de n elevadas a las sucesivas potencias de p sea igual a k * n.
// En otras palabras:

// ¿Existe un número entero k como: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// Si es el caso devolveremos k, si no devolveremos -1.

// Nota : n y p siempre se darán como números enteros estrictamente positivos.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
    let arr = n
        .toString()
        .split('')
    for (let i = 0; i < arr.length; i++) arr[i] = Number(arr[i]) ** (p + i);
    const iV = 0;
    let sum = arr.reduce((a, c) => a + c, iV);
    return Number.isInteger(sum / n) ? sum / n : -1;
};

// digPow(/*¿Existe un número entero "k" como: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k ? Pasale como primer parametro un numero n (cada digito representara una letra en orden alfabetico en la ecuacion) y un numero p como segundo para comprobarlo*/)