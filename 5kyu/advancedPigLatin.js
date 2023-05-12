// https://www.codewars.com/kata/533c46b140aafec05b000d31

// Pig latin se crea tomando TODAS LAS CONSONANTES antes de la primera vocal de una palabra y moviéndolas al final de la palabra seguidas de las letras "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"
// Si la primera letra de la palabra es una vocal, la secuencia se deja igual y las letras "camino" se agregan al final.

// "algorithm" => "algorithmway"
// Este problema es diferente de otras variaciones en que espera que la carcasa permanezca igual, por lo que:

// "Hello World" => "Ellohay Orldway"
// así como la puntuación.
// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Tu trabajo es tomar una cadena y traducirla a Pig Latin. La cadena nunca estará indefinida, pero puede contener tanto números como letras. Una palabra nunca será una combinación de números y letras. Además, nunca habrá puntuación al comienzo de una palabra y la única letra mayúscula en una palabra podra ser la primera letra, lo que significa que hay cero en todas las palabras en mayúscula.

translate = str => {
    let count = -1;
    let points = "";
    let add = [];
    let j = 0;
    let mayus = false;
    return str
        .split(' ')
        .map(e =>
            e
                .split('')
                .map((e, i, arr) => {
                    if (i == 0) {
                        count = -1;
                        add = [];
                        points = "";
                        j = 0;
                        e == e.toUpperCase() ? mayus = true : mayus = false;
                    };
                    if (/[!?.]/.test(e) && i == 0) return e
                    while (!/[aeiou]/.test(arr[j]) && i == 0) {
                        count++;
                        j++;
                    }
                    if (!/[aeiou]/.test(arr[0].toLowerCase())) {
                        if (i <= count) {
                            i != count ? add.push(e.toLowerCase()) : add.push(e.concat('ay').toLowerCase())
                            return '';
                        };
                        return i != arr.length - 1 ? e.toLowerCase() : e = e.concat(add.join(''));
                    }
                    return i != arr.length - 1 ? e.toLowerCase() : e.concat('way').toLowerCase();
                })
                .join('')
                .split('')
                .filter(e => {
                    if (!/[!?.]/.test(e))
                        return e
                    else
                        points = points + e;
                })
                .join('')
                .concat(points)
                .split('')
                .map((e, i) => mayus == true && i == 0 ? e.toUpperCase() : e)
                .join('')
        )
        .join(' ');
};

//translate("Pasame una cadena y lee el enunciado para saber que hago!")