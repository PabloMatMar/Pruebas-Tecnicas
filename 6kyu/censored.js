// https://www.codewars.com/kata/591a86bfe76dc98f24000030


// Codewars Weeklyha ganado popularidad en los últimos meses y está recibiendo muchas cartas de admiradores. Desafortunadamente, algunos de los lectores usan palabras ofensivas y el editor quiere mantener la revista familiar.

// Para gestionar esto, se le ha pedido que implemente un algoritmo de censura. Se le dará la carta de fan texty una lista de forbiddenWords. Su algoritmo debe reemplazar todas las apariciones de las palabras prohibidas en el texto con secuencias de asteriscos de la misma longitud.

// Tenga cuidado de censurar solo palabras, nadie quiere ver "classic"escrito como "cl***ic".

// De entrada y salida
// [input]cadenatext

// Texto para censurar, compuesto por palabras en inglés (o no inglés, para casos aleatorios) en mayúsculas y minúsculas separadas por un solo carácter de espacio en blanco cada una. No se utiliza puntuación. Todas las palabras pueden consistir únicamente en letras del alfabeto latino.

// [input]matriz de cadenasforbiddenWords

// La lista de palabras a censurar, todo en minúsculas.

// [output]una cuerda

// El texto censurado. Su longitud debe ser la misma que la longitud del texto.

// Ejemplo
// Para text = "The cat does not like the fire"y forbiddenWords = ["cat","fire"], la salida debería ser "The *** does not like the ****".

function censorThis(text, forbiddenWords) {

    let wordCensored = []
    const textArr = text.toLowerCase().split(' ')
    let textModificated = text.split(' ')

    for (let i = 0; i < textArr.length; i++) {
        for (let j = 0; j < forbiddenWords.length; j++) {
            if (textArr[i] === forbiddenWords[j]) {
                for (let z = 0; z < forbiddenWords[j].length; z++) {
                    wordCensored.push('*')

                }
                wordCensored = wordCensored.join('')
                textModificated[i] = wordCensored
                wordCensored = []
            }
        }
    }
    return textModificated.join(' ')
}

// censorThis(/*"Introduce un string como primer parametro", ["y", "un", "array", "cuyos", "elementos", "sean", "los", "string", "a", "censurar", "como", "segundo", "parametro" ] */)