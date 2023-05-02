https://www.codewars.com/kata/5848565e273af816fb000449

// ¡Quieres crear mensajes secretos que puedan ser descifrados por Descifrar esto! kata. Aquí están las condiciones:

// Su mensaje es una cadena que contiene palabras separadas por espacios.
// Debe encriptar cada palabra en el mensaje usando las siguientes reglas:
// La primera letra debe convertirse a su código ASCII.
// La segunda letra debe ser intercambiada con la última letra
// Manteniéndolo simple: no hay caracteres especiales en la entrada.
// Ejemplos:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
    return text
        .split(' ')
        .map(e => e
            .split('')
            .map((e, i, arr) => {
                if (i == 0) return e = e.charCodeAt(0)
                if (i == 1) return e = arr[arr.length - 1]
                if (i == arr.length - 1) return e = arr[1]
                else return e
            }).join(''))
        .join(' ');
};

//encryptThis(/*Lee las reglas de arriba para saber como encriptará el string que le pases */)