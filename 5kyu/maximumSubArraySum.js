// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// El problema de subarreglo de suma máxima consiste en encontrar la suma máxima de una subsecuencia contigua en un arreglo o lista de enteros:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// El caso fácil es cuando la lista se compone solo de números positivos y la suma máxima es la suma de toda la matriz. Si la lista se compone solo de números negativos, devuelva 0 en su lugar.

// Se considera que la lista vacía tiene la suma mayor cero. Tenga en cuenta que la lista o matriz vacía también es una sublista/submatriz válida.


const maxSequence = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++) {
            let subArrSum = arr
                .slice(i, j + 1)
                .reduce((a, b) => a + b, 0);
            if (subArrSum > sum)
                sum = subArrSum;
        };
    return sum;
};

//maxSequence(/*Pasale como argumento un array de numeros, positivos y (preferiblemente) negativos, devolverá el
//valor de la suma de aquel subArray que tenga una mayor suma (si son todos positivos devolvera arr.reduce..) */)