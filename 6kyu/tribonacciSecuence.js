https://www.codewars.com/kata/556deca17c58da83c00002db

// Bien conocido con el hermano mayor de Fibonacci, también conocido como Tribonacci.

// Como su nombre ya puede revelar, funciona básicamente como un Fibonacci, pero sumando los últimos 3 (en lugar de
// 2) números de la secuencia para generar el siguiente.

// Entonces, si vamos a comenzar nuestra secuencia Tribonacci con [1, 1, 1] una entrada inicial (también conocida
// como firma ), tenemos esta secuencia:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// Pero, ¿y si empezáramos con [0, 0, 1]como firma? Como comenzar con [0, 1]en lugar de cambiar[1, 1] básicamente
// la secuencia común de Fibonacci en un lugar, puede sentirse tentado a pensar que obtendríamos la misma secuencia
// desplazada en 2 lugares, pero ese no es el caso y obtendríamos:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Bueno, es posible que ya lo haya adivinado, pero para que quede claro: debe crear una función de Fibonacci que,
// dada una matriz/lista de firmas , devuelva los primeros n elementos, incluida la firma de la secuencia así
// sembrada.

// La firma siempre contendrá 3 números; n siempre será un número no negativo; if n == 0, luego devuelve una matriz
// vacía (excepto en C devuelve NULL) y prepárate para cualquier otra cosa que no esté claramente especificada;)

function tribonacci(signature, n) {
    if (n == 0) return [];
    if (n == 1) return [signature[0]];
    if (n == 2) return [signature[0], signature[1]];
    let arr = [signature[0], signature[1], signature[2]];

    for (let i = 3; i < n; i++)
        arr.push((arr[i - 1] + arr[i - 2] + arr[i - 3]));

    return arr;
};

//tribonacci(/*Pasale como primer argumento un array y como segundo un número N, el array se extenderá siguiendo la secuencia tribonaci, lo hará hasta que su longitud sea N y devolverá el array con todos ellos (si n == 0 devuelve array vacio) */)

// Ejemplo: tribonacci([0,1,1], 17)
// (17) [0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768]