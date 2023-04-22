https://www.codewars.com/kata/not-very-secure/discuss/javascript

// En este ejemplo, debe validar si una cadena de entrada del usuario es alfanumérica. La cadena dada
// no es nil/null/NULL/None, por lo que no tiene que verificar eso.

// La cadena tiene las siguientes condiciones para ser alfanumérica:

// Al menos un carácter ( ""no es válido)
// Los caracteres permitidos son letras latinas en mayúsculas/minúsculas y dígitos de 0a9
// Sin espacios en blanco/guion bajo


function alphanumeric(string) {
    return /^[A-Za-z0-9]+$/.test(string);

};