// https://www.codewars.com/kata/546f922b54af40e1e90001da

// En este kata, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

// Si algo en el texto no es una carta, ignóralo y no lo devuelvas.

// "a" = 1, "b" = 2, etc

// Ejemplo
// alphabetPosition("The sunset sets at twelve o' clock.")
// Debería regresar "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(como una cadena)
alphabetPosition = text => {
    return text
        .split('')
        .map(e => {
            if (e.charCodeAt() >= 97 && e.charCodeAt() <= 122)
                return e.charCodeAt() - 96
        })
        .filter(e => typeof(e) == 'number')
        .join(' ');
};
//alphabetPosition("Pasale un string, cambiara las letras por el numero que indica la posicion que ocupan en el alfabeto,
// lo demas sera eliminado")