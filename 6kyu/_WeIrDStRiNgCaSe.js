https://www.codewars.com/kata/52b757663a95b11b3d00062d

// Escriba una función toWeirdCase( weirdcaseen Ruby) que acepte una cadena y devuelva la misma cadena con
// todos los caracteres indexados pares en cada palabra en mayúsculas y todos los caracteres indexados
// impares en cada palabra en minúsculas. La indexación que se acaba de explicar se basa en cero, por lo
// que el índice cero-ésimo es par, por lo tanto, ese carácter debe estar en mayúsculas y debe comenzar de
// nuevo para cada palabra.

// La cadena pasada solo constará de caracteres alfabéticos y espacios ( ' '). Los espacios solo estarán
// presentes si hay varias palabras. Las palabras estarán separadas por un solo espacio ( ' ').

// Ejemplos:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(str) {
    return str
        .split(' ')
        .map(e => e
            .split('')
            .map((el, i) => {
                return i % 2 == 0 ? el.toUpperCase() : el.toLowerCase();
            }).join(''))
        .join(' ');
};

// toWeirdCase(/*Pásale un string y devolvera el mismo string con todos los caracteres pares en mayusculas
// y todos los caracteres impares en minusculas (Los espacios se excluyen*/)