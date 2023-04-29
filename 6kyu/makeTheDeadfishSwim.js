https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// Escriba un analizador simple que analice y ejecute Deadfish.

// Deadfish tiene 4 comandos, cada uno de 1 carácter:

// i incrementa el valor (inicialmente 0)
// d disminuye el valor
// s eleva al cuadrado el valor
// o genera el valor en la matriz de retorno
// Los caracteres no válidos deben ignorarse.
// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
    let number = 0;
    let solution = [];
    let arr = data.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'i') number++;
        if (arr[i] === 's') number = number * number;
        if (arr[i] === 'd') number--;
        if (arr[i] === 'o') solution.push(number);
    };
    return solution;
};
//parse(/*Pásale un string, si contiene una o varias de las letras de abajo hara lo que cada una
// le indica */)

// i incrementa el valor (inicialmente 0)
// d disminuye el valor
// s eleva al cuadrado el valor
// o genera el valor en la matriz de retorno
// Los caracteres no válidos deben ignorarse.
// parse("iiisdoso") => [ 8, 64 ]