https://www.codewars.com/kata/57814d79a56c88e3e0000786


// Implemente un algoritmo de seudocifrado que, dada una cadena S y un número entero, N concatene todos los caracteres indexados impares S con todos los caracteres indexados pares de S, este proceso debe repetirse varias Nveces.

// Ejemplos:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Junto con la función de cifrado, también debe implementar una función de descifrado que invierta el proceso.

// Si la cadena S es un valor vacío o el número entero N no es positivo, devuelva el primer argumento sin cambios.


function encrypt(text, n) {
    if (text == null) return text
    let Pcrypt = text.split('');
    let odd = [];
    let pair = [];
    for (let i = 0; i < n; i++) {
        pair = Pcrypt.filter((e, i) => i % 2 == 0);
        odd = Pcrypt.filter((e, i) => i % 2 != 0);
        Pcrypt = odd.concat(pair);
    }
    return Pcrypt.join('');
};

//encrypt(/*Pasale una cadena y un numero, separará los caracteres indexados impares y los pares, despues los concatenerá, repetirá este proceso tantas veces como el numero le indique*/)

function decrypt(Pcrypt, n) {
    if (Pcrypt == null) return Pcrypt
    let text = Pcrypt.split('');
    let half = [];
    let half2 = [];
    let deCrypt = [];
    for (let i = 0; i < n; i++) {
        if (Pcrypt.length % 2 == 0) {
            half = text.slice(0, text.length / 2);
            half2 = text.slice(text.length / 2);
            for (let j = 0; j < text.length; j++) {
                if (j % 2 == 0) deCrypt.push(half2[Math.trunc(j / 2)]);
                else deCrypt.push(half[Math.trunc(j / 2)]);
            }
            text = deCrypt;
            deCrypt = [];
        } else {
            half = text.slice(0, Math.trunc(text.length / 2));
            half2 = text.slice(Math.trunc(text.length / 2));
            for (let j = 0; j < text.length; j++) {
                if (j % 2 == 0) deCrypt.push(half2[Math.trunc(j / 2)]);
                else deCrypt.push(half[Math.trunc(j / 2)]);
            }
            text = deCrypt;
            deCrypt = [];
        };

    };
    return text.join('');
};//encrypt(/*Realiza el proceso inverso*/)