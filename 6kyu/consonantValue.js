// https://www.codewars.com/kata/59c633e7dcc4053512000073

// Dada una cadena en minúsculas que tiene solo caracteres alfabéticos y sin espacios, devuelve el valor más alto de las subcadenas de consonantes. Las consonantes son cualquier letra del alfabeto excepto "aeiou".

// Asignaremos los siguientes valores: a = 1, b = 2, c = 3, .... z = 26.

// Por ejemplo, para la palabra "zodíacos", tachemos las vocales. Obtenemos: "zodI acs"

const solve = (str) => {
    let sum = 0;
    let compares = 0;
    let arr = str.toLowerCase().split('').map((e, i, ar) => {
        if (!/[aeiou]/.test(e))
            sum = sum + e.charCodeAt() - 96;
        else if (sum > compares) {
            compares = sum;
            sum = 0;
        } else sum = 0;

        if (sum > compares && i == ar.length - 1)
            compares = sum;

    })
    return compares;
};

