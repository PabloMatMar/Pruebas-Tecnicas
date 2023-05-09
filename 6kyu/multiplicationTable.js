// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

// Su tarea es crear una tabla de multiplicar N × N, del tamaño proporcionado en el parámetro.

// Por ejemplo, cuando se da sizees 3:

// 1 2 3
// 2 4 6
// 3 6 9
// Para el ejemplo dado, el valor devuelto debe ser:

// [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (n) => {
    let table = [];
    for (let i = 0; i < n; i++) {
        table.push([]);
        for (let j = 0; j < n; j++)
            table[i][j] = (j + 1) * (i + 1)
    };
    return table;
};
//multiplicationTable(Pasale un numero, devolverá un array bidimensional nxn con la longitud del número
//En cada array encontraras los elementos desde 1 hasta n multiplicados por el indice(+1) del array)