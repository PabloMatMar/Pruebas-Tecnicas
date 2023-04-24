https://www.codewars.com/kata/550554fd08b86f84fe000a58

// Dadas dos matrices de cadenas a1y a2devolver una matriz ordenada ren orden lexicográfico de las cadenas
// de las a1cuales son subcadenas de cadenas de a2.

// Ejemplo 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// devoluciones["arp", "live", "strong"]

// Ejemplo 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// devoluciones[]

function inArray(array1, array2) {
    let solution = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.map(e => e.includes(array1[i])).includes(true)) {
            solution.push(array1[i]);
        };
    };
    return solution.sort();
};
//inArray(/*Pásale un array con strings como primer parametro, y lo mismo para el segundo, devolverá un
// array con los strings del primer parametro que esten contenidos en los strings del segundo parametro.
//Tabien los ordenará */)