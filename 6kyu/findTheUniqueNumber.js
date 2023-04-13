https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// Hay una matriz con algunos números. Todos los números son iguales excepto uno. ¡Intenta encontrarlo!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Se garantiza que la matriz contiene al menos 3 números.

// Las pruebas contienen matrices muy grandes, así que piense en el rendimiento.


function findUniq(arr) {
    return Number(arr.filter(number => (number !== arr[0] && number !== arr[1]) || (number !== arr[1] && number !== arr[2]) || (number !== arr[0] && number !== arr[2])).join())
};

//findUniq(/*Introduce un array de numeros con todos iguales exceto uno, devolvera el numero unico */)