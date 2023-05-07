// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

// Recibes un mensaje secreto que debes descifrar. Aquí están las cosas que necesita saber para descifrarlo:

// Para cada palabra:

// la segunda y la última letra se intercambian (por ejemplo, Hello se convierte en Holle)
// la primera letra se reemplaza por su código de carácter (por ejemplo, Hse convierte en 72)
// Nota: no se utilizan caracteres especiales, solo letras y espacios

// Ejemplos

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

decipherThis = str => {
    let num = 0;
    let sum = 0;

    return str
        .split(' ')
        .map(e => e
            .split('')
            .map((e, i, arr) => {
                if (i == 0) {
                    if (!isNaN(Number(arr[i].concat(arr[i + 1]).concat(arr[i + 2])))) {
                        num = arr[i].concat(arr[i + 1]).concat(arr[i + 2])
                        sum = 1;

                    } else {
                        num = arr[i].concat(arr[i + 1]);
                        sum = 0;
                    }
                    return String.fromCharCode(num);
                }
                if (i == 2 + sum) return arr[arr.length - 1];
                if (i == arr.length - 1) return arr[2 + sum];
                else return e
            })
            .filter(e => isNaN(Number(e)))
            .join(''))
        .join(' ')
};

//decipherThis(/*Pasale un string con cada primera letra de cada palabra en formato ascii, la segunda será
// la ultima y la ultima la segunda, devolvera la cadena decodificada */)