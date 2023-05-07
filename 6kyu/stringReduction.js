// https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072

// En este Kata, vamos a ver cómo se puede usar un Hash (o Mapa o dict) para realizar un seguimiento de los caracteres en una cadena.

// Considere dos cadenas "aabcdefg"y "fbd". ¿Cuántos caracteres tenemos que eliminar de la primera cadena para obtener la segunda cadena? Aunque no es la única forma de resolver esto, podríamos crear un Hash de conteos para cada cadena y ver qué conteos de caracteres son diferentes. Eso debería acercarnos a la respuesta. Te dejaré el resto a ti.

// Para este ejemplo, solve("aabcdefg","fbd") = 5. Además, solve("xyz","yxxz") = 0porque no podemos obtener la segunda cadena de la primera ya que la segunda cadena es más larga.

// Más ejemplos en los casos de prueba.

// ¡Buena suerte!




solve = (a, b) => {
    if (b.length > a.length) return 0;
    let toReduce = {};
    let toCompare = {};
    let sum = 0;
    a.split('').map(e => toReduce[e] == undefined ? toReduce[e] = 1 : toReduce[e]++);
    b.split('').map(e => toCompare[e] == undefined ? toCompare[e] = 1 : toCompare[e]++);

    for (const key in toReduce) {
        if (toCompare[key] != undefined && ((toReduce[key] - toCompare[key]) < 0 || (toReduce[key] - toCompare[key]) == NaN)) return 0;
        toCompare[key] == undefined ? sum = sum + toReduce[key] : sum = sum + (toReduce[key] - toCompare[key]);
    };
    return sum;
};
//solve(Pasale dos strings, devolverá cuantos caracteres debe quitar al primer string para quedarse con
//los mismos que el segundo, en caso de no ser posible devolverá 0)