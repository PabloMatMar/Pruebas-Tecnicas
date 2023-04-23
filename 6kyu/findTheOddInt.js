https://www.codewars.com/kata/54da5a58ea159efa38000836


// Dada una matriz de números enteros, encuentre el que aparece un número impar de veces.

// Siempre habrá un solo número entero que aparecerá un número impar de veces.

// Ejemplos
// [7]debe devolver 7, porque ocurre 1 vez (lo cual es impar).
// [0]debe devolver 0, porque ocurre 1 vez (lo cual es impar).
// [1,1,2]debe devolver 2, porque ocurre 1 vez (lo cual es impar).
// [0,1,0,1,0]debería volver 0, porque ocurre 3 veces (lo cual es impar).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]debería volver 4, porque aparece 1 vez (lo cual es extraño).

function findOdd(A) {
    let arr = A;
    arr = arr.filter((element, i, a) => a.indexOf(element) === a.lastIndexOf(element));
    if (arr.length === 1) return arr[0];
    else arr = A;
    for (let i = 0; i < arr.length; i++) if (arr.length !== 1)
        arr = arr.filter((element, i, a) => a.indexOf(element) !== i);
    return arr[0];
}
//findOdd(/*Pásale un array de numeros enteros en el que solo un numero aparezca un numero impar de veces,
//devolverá dicho número  */)
