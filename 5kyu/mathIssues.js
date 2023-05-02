https://www.codewars.com/kata/5267faf57526ea542e0007fb

// Oh no, nuestro objeto Math fue reiniciado "accidentalmente". ¿Puede volver a implementar algunas de esas funciones? Podemos asegurar que solo se pasan como argumentos números no negativos. Por lo tanto, no tiene que considerar cosas como undefined, null, NaN, números negativos, cadenas, etc.

// Aquí hay una lista de funciones que necesitamos:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = (number) => number % 1 >= 0.5 ? (number - number % 1) + 1 : (number - number % 1);
Math.ceil = (number) => number % 1 > 0 ? (number - number % 1) + 1 : number;
Math.floor = (number) => number - number % 1;

//LLAMADA:
//Pasales un numero, con o sin decimales:
//La funcion Math.round devolverá el número entero con mayor aproximacion al que hayas pasado.
//La funcion Math.ceil devolverá el número entero aproximado hacia arriba.
//La funcion Math.floor devolverá el número entero aproximado hacia abajo.

// Comenta las funciones de arriba y descomenta las de abajo. Hacen lo mismo pero las de abajo son
//Sin el operador % para ponerlo un poco mas dificil:

// Math.round = (number) => {
//     let num = number
//         .toString()
//         .split('');
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == '.') {
//             if (Number(num[i + 1]) >= 5) return Number(num.slice(0, i).join('')) + 1;
//             else return Number(num.slice(0, i).join(''));

//         }
//     }
//     return number;
// };

// Math.ceil = (number) => {
//     let num = number
//         .toString()
//         .split('')
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == '.') return Number(num.slice(0, i).join('')) + 1;
//         else if (i == num.length - 1) return number;

//     };
//     return Number(num) + 1;
// };

// Math.floor = (number) => {
//     let num = number
//         .toString()
//         .split('')
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == '.') return Number(num.slice(0, i).join(''));
//         else if (i == num.length - 1) return number;

//     };
// };