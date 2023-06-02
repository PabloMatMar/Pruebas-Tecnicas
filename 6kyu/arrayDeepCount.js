// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

// Se le da un array. Complete la función que devuelve la cantidad de TODOS los elementos dentro de un array, incluidos los arrays anidados.

// Ejemplos
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// La entrada siempre será un array.


const deepCount = (arr) => {
    let count = 0;
    const merge = (arr) => {
        let check = false;
        for (let i = 0; i < arr.length; i++)
            if (Array.isArray(arr[i])) {
                check = true;
                arr = arr.slice(0, i).concat(arr[i]).concat(arr.slice(i + 1));
                count++;
            };
        if (!check)
            return count + arr.length
        return merge(arr);
    };
    return merge(arr)
};
//deepCount(/*Pasale un array, devolvera la longitud de ese array aplanado, pero sumandole uno por cada array
// anidado */)

// deepCount([[1,2],[[]]]) devolverá 5, 2 elementos + 3 arrays anidados(uno de ellos vacio)