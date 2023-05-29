// Escriba una función que cuando se le dé un número >= 0, devuelva una matriz de subarreglos de longitud ascendente.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

const pyramid = n => {
    if (typeof (n) != 'number')
        return 'Enter a number!'
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
        let j = i;
        while (j < n) {
            arr[i].push(1);
            j++;
        };
    };
    return arr.reverse();
};

//pyramid(/*Pasale un número n devolverá  un array de arrays y en cada arrais una cantidad de elementos igual a
//n = 1, n = 2... n = n*/)