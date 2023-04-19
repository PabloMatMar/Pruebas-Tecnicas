https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete el método o la función para que convierta las palabras delimitadas por guiones o guiones bajos
// en mayúsculas y minúsculas . La primera palabra dentro de la salida debe estar en mayúsculas solo si la
// palabra original estaba en mayúsculas (conocido como Upper Camel Case, también conocido como caso
// Pascal). Las siguientes palabras deben estar siempre en mayúscula.

// Ejemplos
// "the-stealth-warrior"se convierte en"theStealthWarrior"

// "The_Stealth_Warrior"se convierte en"TheStealthWarrior"

// "The_Stealth-Warrior"se convierte en"TheStealthWarrior"

function toCamelCase(str) {
    let arr = str
        .replaceAll('-', ' ')
        .replaceAll('_', ' ')
        .split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0)
            arr[i] = arr[i][0]
                .toUpperCase()
                .concat(arr[i].slice(1, arr[i].length));
    };
    return arr.join('');
};

//toCamelCase(/*Pasale ejemplos como este "the-stealth-warrior" y devolverá esto: "theStealthWarrior"*/)