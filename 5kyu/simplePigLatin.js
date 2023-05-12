//https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Mueva la primera letra de cada palabra al final de la misma, luego agregue "ay" al final de la palabra. Deje los signos de puntuación intactos.

// Ejemplos
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
    let points = "";
    return str
        .split(' ')
        .map(e =>
            e
                .split('')
                .map((e, i, arr) => {
                    points = "";
                    if (!/[?!.]/.test(e))
                        return i != arr.length - 1 ? e = arr[i + 1] : e = arr[0].concat('ay');
                    else
                        return e;
                })
                .filter(e => {
                    if (!/[!?.]/.test(e))
                        return e
                    else
                        points = e;
                })
                .join('')
                .concat(points)
        )
        .join(' ');
};
//pigIt(/*Pasale un string, movera la primera letra de cada palabra al final de la misma y agregará 'ay'
//Si hay signos de puntuacion los dejará al final de la palabra  */)