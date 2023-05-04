// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// Supongamos "#"que es como un retroceso en una cadena. Esto significa que la cadena "a#bc#d"en realidad es"bd"

// Su tarea es procesar una cadena con "#"símbolos.

// Ejemplos
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

cleanString = s => {
    let arr = s.split('');
    const solution = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '#') solution.unshift(arr[i])
        if (arr[i] == '#' && solution.length > 0) solution.shift()
    };
    return solution.reverse().join('');
};