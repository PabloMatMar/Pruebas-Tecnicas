https://www.codewars.com/kata/5a86073fb17101e453000258

// Clasificación emocional (︶︿︶)
// Tendrás una función llamada " sortEmotions " que devolverá una serie de emociones ordenadas. Tiene dos
// parámetros, el primer parámetro llamado " arr " esperará una serie de emociones donde una emoción será
// una de las siguientes:

// :D -> Súper feliz
// :) -> Feliz
// :| -> Normal
// :( -> Triste
// T_T -> Súper Triste
// Ejemplo de la matriz:[ 'T_T', ':D', ':|', ':)', ':(' ]

// Y el segundo parámetro se llama " orden ", si este parámetro es verdadero , el orden de las emociones
// será descendente (de Súper feliz a Súper triste ), si es falso , será ascendente (de Súper triste a
// Súper feliz )

// Ejemplo si el orden es verdadero con la matriz anterior:[ ':D', ':)', ':|', ':(', 'T_T' ]

// Súper feliz -> Feliz -> Normal -> Triste -> Súper triste
// Si el pedido es falso:[ 'T_T', ':(', ':|', ':)', ':D' ]

// Súper Triste -> Triste -> Normal -> Feliz -> Súper Feliz
// Ejemplo:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// ¡Más en casos de prueba!

// Notas:

// La matriz podría estar vacía, en ese caso devolver la misma matriz vacía ¯\_( ツ )_/¯

//Mi solucion

function sortEmotions(arr, order) {
    var arr2 = [];

    const arrSuperFeliz = arr.filter(caracter => caracter === ':D');
    if (arrSuperFeliz.length > 0)
        for (let i = 0; i < arrSuperFeliz.length; i++)
            arr2.push(arrSuperFeliz[i]);

    const arrFeliz = arr.filter(caracter => caracter === `:)`);
    if (arrFeliz.length > 0)
        for (let i = 0; i < arrFeliz.length; i++)
            arr2.push(arrFeliz[i]);

    const arrNormal = arr.filter(caracter => caracter === ':|');
    if (arrNormal.length > 0)
        for (let i = 0; i < arrNormal.length; i++)
            arr2.push(arrNormal[i]);

    const arrTriste = arr.filter(caracter => caracter === ':(');
    if (arrTriste.length > 0)
        for (let i = 0; i < arrTriste.length; i++)
            arr2.push(arrTriste[i]);

    const arrSuperTriste = arr.filter(caracter => caracter === 'T_T');
    if (arrSuperTriste.length > 0)
        for (let i = 0; i < arrSuperTriste.length; i++)
            arr2.push(arrSuperTriste[i]);



    if (order) return arr2;
    else return arr2.reverse();


};


//sortEmotions(arr, order) Lee abajo y sabras que pasarle y que hace:


// :D -> Súper feliz
// :) -> Feliz
// :| -> Normal
// :( -> Triste
// T_T -> Súper Triste
// Ejemplo de la matriz:[ 'T_T', ':D', ':|', ':)', ':(' ]

// Y el segundo parámetro se llama " orden ", si este parámetro es verdadero , el orden de las emociones
// será descendente (de Súper feliz a Súper triste ), si es falso , será ascendente (de Súper triste a
// Súper feliz )