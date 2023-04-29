https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

// Complete el método que devuelve el número que es más frecuente en la matriz de entrada dada. Si hay un empate para el número más frecuente, devuelva el primero que aparezca en la matriz original.

// Nota: no se darán matrices vacías.

// Ejemplos
// highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// function highestRank(arr) {
//     let points = {};
//     let solution = [-Infinity, 0];
//     arr.map((e, i) => points[e] ? points[e][0]++ : points[e] = [1, i]);

//     for (let key in points) {
//         if (points[key][0] > solution[0]) solution = [points[key][0], key, points[key][1]]
//     }
//     return arr[points[solution[1]][1]];
// };

function highestRank(arr) {
    let points = {};
    let solution = [-Infinity, 0];
    let arrOfHighest = [];
    arr.map(e => points[e] ? points[e]++ : points[e] = 1);
    console.log(points);
    for (let key in points) {
        if (points[key] > solution[0]) solution = [points[key], key]
    };
    for (let key in points) {
        if (points[key] == solution[0]) arrOfHighest.push(Number(key));
    };
    for (let i = 0; i < arr.length; i++) {
        if (arrOfHighest.includes(arr[i])) return arr[i]
    }
};
//highestRank(/*Pásale un array, devolverá el elemento que mas se repita, si hay empate devolverá el
// primero que aparezca en el aray original */)