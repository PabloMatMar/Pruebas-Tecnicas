https://www.codewars.com/kata/52449b062fb80683ec000024

// El equipo de marketing dedica demasiado tiempo a escribir hashtags.
// ¡Ayudémoslos con nuestro propio Generador de Hashtags!

// Aquí está el trato:

// Debe comenzar con un hashtag ( #).
// Todas las palabras deben tener su primera letra en mayúscula.
// Si el resultado final tiene más de 140 caracteres, debe devolver false.
// Si la entrada o el resultado es una cadena vacía, debe devolver false.
// Ejemplos
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// function generateHashtag(str) {
//     function toCamelCase(str) {
//         let arr = str
//             .split(' ');
//         for (let i = 0; i < arr.length; i++) {

//             arr[i] = arr[i][0]
//                 .toUpperCase()
//                 .concat(arr[i].slice(1, arr[i].length));

//         }
//         return arr.join('');
//     } toCamelCase(str)
//     str.split(' ')
// }

function generateHashtag(str) {

    let hashtag = str
        .split(' ')
        .filter(e => e !== '');
    if (hashtag.join('').length <= 0 || hashtag.join('').length > 139) return false;

    return hashtag
        .map(e => e = e[0]
            .toUpperCase()
            .concat(e.slice(1, e.length)))
        .reverse()
        .concat('#')
        .reverse()
        .join('');

};

// generateHashtag(/*Pásale un string, eliminara los espacios y devolvera el string con cada primera letra
//  letra de cada palabra en mayuscula, y #al principio del string, siempre y cuando tenga menos
// de 140 caracteres si no devuelve false*/)