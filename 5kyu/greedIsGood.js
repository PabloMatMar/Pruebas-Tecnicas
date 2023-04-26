https://www.codewars.com/kata/5270d0d18625160ada0000e4

// Greed es un juego de dados que se juega con cinco dados de seis caras. Tu misión, si decides aceptarla,
// es anotar un lanzamiento de acuerdo con estas reglas. Siempre se le dará una matriz con cinco valores de
// dados de seis lados.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// Un solo dado solo se puede contar una vez en cada tirada. Por ejemplo, un "5" dado solo puede contar
// como parte de un triplete (que contribuye a los 500 puntos) o como un solo 50 puntos, pero no ambos en
// la misma tirada.

// Ejemplo de puntuación

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// En algunos idiomas, es posible mutar la entrada a la función. Esto es algo que nunca debes hacer.
// Si muta la entrada, no podrá pasar todas las pruebas.

function score(nums) {
    let sum = 0;
    const points = { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 };
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    nums.map(e => count[e]++)

    for (let i = 1; i <= 6; i++) {
        if (count[i] >= 3) sum = sum + points[i];
    };

    if (count[1] == 2) sum = sum + 200
    if (count[1] == 4 || count[1] == 1) sum = sum + 100;
    if (count[1] > 4) sum = sum + 200;
    if (count[5] == 2) sum = sum + 100
    if (count[5] == 4 || count[5] == 1) sum = sum + 50;
    if (count[5] > 4) sum = sum + 100;

    return sum;
};
//score(/*Pásale un array de cinco elementos numericos comprendidos entre el 1 y el 6 inclusive, devolverá
// la suma de puntuaciones que ves abajo*/)

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point