https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Su tarea es crear una función que pueda tomar cualquier número entero no negativo como argumento y devolverlo con sus dígitos en orden descendente. Esencialmente, reorganiza los dígitos para crear el número más alto posible.

// Ejemplos:
// Entrada: 42145 Salida:54421

// Entrada: 145263 Salida:654321

// Entrada: 123456789 Salida:987654321

function descendingOrder(n) {
    let arr = n
    .toString()
    .split('')
    .sort(function (a, b) {
        return b - a;
    });

    return Number(arr.join(''))
} descendingOrder(/*Pasale un numero no negativo para ver como lo devuelve con sus digitos ordenados de mayor a menor */);