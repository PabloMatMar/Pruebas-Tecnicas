https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Simple, dada una cadena de palabras, devuelve la longitud de la(s) palabra(s) más corta(s).

// La cadena nunca estará vacía y no es necesario tener en cuenta los diferentes tipos de datos.


function findShort(s) {
    return s.split(' ').map(element => element.length).sort((a, b) => a - b)[0]
};

// findShort(/*Pasale una cadena para que veas que devuelve la longitud de la palabra mas corta de la misma*/);