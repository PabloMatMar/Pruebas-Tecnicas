https://www.codewars.com/kata/56541980fa08ab47a0000040

// En una fábrica, una impresora imprime etiquetas para cajas. Para un tipo de cajas, el impresor debe utilizar colores que, por simplicidad, se nombran con letras de a to m.

// Los colores utilizados por la impresora se registran en una cadena de control. Por ejemplo, una cadena de control "buena" significaría aaabbbbhaijjjmque la impresora usó tres veces el color a, cuatro veces el color b, una vez el color h y luego una vez el color a...

// A veces hay problemas: falta de colores, mal funcionamiento técnico y se produce una cadena de control "mala", por ejemplo, aaaxbbbbyyhwawiwjjjwwmcon letras que no son de a to m.

// Debe escribir una función printer_errorque, dada una cadena, devuelva la tasa de error de la impresora como una cadena que representa un racional cuyo numerador es el número de errores y el denominador la longitud de la cadena de control. No reduzcas esta fracción a una expresión más simple.

// La cadena tiene una longitud mayor o igual a uno y contiene solo letras desde a hasta z.

// Ejemplos:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printerError(s) {

    let numerator = 0;
    let denominator = 0;


    /[n-z]/.test(s) ? numerator = s.match(/[n-z]/g).length : numerator = 0

    denominator = s
        .match(/[a-z]/g).length
        .toString();

    return numerator
        .toString()
        .concat(("/" + denominator));

};

// printerError(/*Pasale un string y veras que devuelve una fracion cuyo denominador sea la cantidad de letras y cuyo numerador sea la cantidad de letras entre n y z siendo estas consideras una orden erronea */)