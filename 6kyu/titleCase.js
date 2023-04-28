https://www.codewars.com/kata/5202ef17a402dd033c000009

// Se considera que una cadena está en mayúsculas y minúsculas si cada palabra de la cadena está (a) en mayúsculas (es decir, solo la primera letra de la palabra está en mayúsculas) o (b) se considera una excepción y se coloca completamente en minúscula a menos que sea la primera palabra, que siempre va en mayúscula.

// Escriba una función que convierta una cadena en caso de título, dada una lista opcional de excepciones (palabras menores). La lista de palabras menores se dará como una cadena con cada palabra separada por un espacio. Su función debe ignorar el caso de la cadena de palabras menores; debe comportarse de la misma manera incluso si se cambia el caso de la cadena de palabras menores.

// Argumentos (Haskell)
// Primer argumento : lista delimitada por espacios de palabras menores que siempre deben estar en minúsculas, excepto la primera palabra de la cadena.
// Segundo argumento : la cadena original que se va a convertir.
// Argumentos (Otros idiomas)
// Primer argumento (obligatorio) : la cadena original que se va a convertir.
// Segundo argumento (opcional) : lista delimitada por espacios de palabras menores que siempre deben estar en minúsculas, excepto la primera palabra de la cadena. Las pruebas de JavaScript/CoffeeScript pasarán undefinedcuando este argumento no se use.
// Ejemplo
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// function titleCase(title, minorWords) {
//     return title
//         .split(' ')
//         .map((e, ind) => e
//             .split('')
//             .map((el, i) => {
//                 return ind == 0 && i == 0 ? el.toUpperCase() :
//                     !minorWords.split(' ').includes(e) && i == 0 ? el.toUpperCase() : el
//             }).join(''))
//         .join(' ')
// };


function titleCase(title, minorWordsArg) {
    let minorWords = minorWordsArg;
    minorWords === undefined ? minorWords = "&" : minorWords = minorWordsArg.toLowerCase();
    return title
        .toLowerCase()
        .split(' ')
        .map((e, ind) => e
            .split('')
            .map((el, i) => {
                return ind == 0 && i == 0 ? el.toUpperCase() :
                    !minorWords.split(' ').includes(e) && i == 0 ? el.toUpperCase() : el.toLowerCase();
            }).join(''))
        .join(' ')
};

//titleCase(/*Pásale como primer argumento un string, como segundo o undefined o una lista de palabras que no quieres que empiecen por mayuscula, devolvera el strig original en formato titulo */)