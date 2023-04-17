https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// La ola (conocida como la ola mexicana en el mundo de habla inglesa fuera de América del Norte) es un ejemplo de ritmo metacrónico que se logra en un estadio repleto cuando grupos sucesivos de espectadores se paran brevemente, gritan y levantan los brazos.

// Tarea
// En este Kata simple tu tarea es crear una función que convierta una cuerda en una Onda Mexicana. Se le pasará una cadena y debe devolver esa cadena en una matriz donde una letra mayúscula es una persona de pie. 
// Normas
// 1. La cadena de entrada siempre estará en minúsculas pero puede estar vacía.

//  2. Si el carácter en la cadena es un espacio en blanco, páselo como si fuera un asiento vacío
// Ejemplo
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    let arr = [];
    let solution = [];

    for (let i = 0; i < str.length; i++)
        arr.push(str)

    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++)
            if (i === j) {
                let firstHalf = str
                    .split('')
                    .slice(0, j);
                let wave = str[j].toUpperCase();
                let secondHalf = str
                    .split('')
                    .slice(j + 1);

                let word = firstHalf
                    .concat(wave)
                    .concat(secondHalf)
                    .join('');

                if (word.toLowerCase() !== word)
                    solution.push(word);
            }



    return solution
};
//wave(/* Pásale un string y devolvera un array en el que cada elemento sea el mismo string con una letra en mayuscula siendo esta la que ocupa el mismo indice que el elemento en el array formandose la "ola" */)