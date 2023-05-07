// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

// Para una cadena determinada, sbusque el carácter c(o C) con la repetición consecutiva más larga y devuelva:

// [c, l]
// donde l(o L) es la longitud de la repetición. Si hay dos o más caracteres con el mismo ldevolver el primero en orden de aparición.

// Para retorno de cadena vacía:

// ["", 0]
// ¡Feliz codificación! :)

longestRepetition = a => {
    let character = ["", 0]
    let solution = [];
    let value = {};
    a.split('').map((e, i, arr) => {
        if (value[e] == undefined) value[e] = 0;
        if (arr[i] != arr[i - 1]) {
            while (arr[i] == arr[i + 1]) {
                value[e]++
                i++
            };
            value[e]++
            character = [arr[i], value[e]];
            solution.push(character);
            character = ["", 0];
            value[e] = 0;
        };
    })

    for (let i = 0; i < solution.length; i++) {
        if (solution[i][1] > character[1]) character = [solution[i][0], solution[i][1]];
    }
    return character;
};
//longestRepetition(/*Pasale un string, devolvera el caracter que mas veces CONSECUTIVAS se repita
//asi como cuantas veces se repita, en caso de empate se devuelve el primero que encuentra */)