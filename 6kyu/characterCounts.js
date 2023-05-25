// https://www.codewars.com/kata/56b409febccd5aafbd000021


// El objeto es contar el número de apariciones de un carácter específico (o conjunto de caracteres) en una cadena.

// Instrucciones
// Completa la función de marcador de posición characterCount.

// debe devolver el número de veces que aparece un solo carácter en la cadena, o
// si se especifican varios caracteres (ya sea proporcionando una matriz o una cadena de longitud 2 o más), debe devolver una matriz de recuentos de caracteres
// consulte las pruebas unitarias proporcionadas para obtener una definición más completa

String.prototype.characterCount = function (arg) {
    if (arg == undefined || arg.length == 0) return;
    let solution = [];
    let letters = "";
    let count = {};
    let check = false;
    typeof (arg) == 'string' ? letters = arg.split('') : letters = arg;
    this.toString().split('').map(e => count[e] == undefined ? count[e] = 1 : count[e]++);
    solution = letters.map(e => count[e] == undefined ? 0 : count[e]);
    if (solution.length > 1) check = true;
    const min = solution.filter(e => e != 0);
    if (min.length == 0 && !check) return 0;
    else if (min.length == 1) return min[0];
    return solution;
};