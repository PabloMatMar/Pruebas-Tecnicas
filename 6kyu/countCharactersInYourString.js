https://www.codewars.com/kata/52efefcbcdf57161d4000091

// La idea principal es contar todos los caracteres que aparecen en una cadena. Si tiene una cadena como
// ab#1a, entonces el resultado debería ser {#: 1, 1: 1,a: 2, b: 1}.

// ¿Qué pasa si la cadena está vacía? Entonces el resultado debería ser un objeto literal vacío, {}.

function count(str) {
    let solution = {}
    str
        .split('')
        .map(e => {
            return (solution[e] >= 1) ? solution[e]++ : solution[e] = 1
        });
    return solution;
};
//count(/* Pásale un string y devolverá un objeto con cuantos caracteres hay de cada uno
// sean del tipo que sean */)