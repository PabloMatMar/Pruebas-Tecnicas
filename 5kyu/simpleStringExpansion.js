// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5

// Considere la siguiente expansión:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Dada una cadena, devuelve la expansión de esa cadena.

// La entrada consistirá únicamente en letras minúsculas y números (del 1 al 9) entre paréntesis válidos. No habrá letras ni números después del último paréntesis de cierre.

const solve = str => {
    let arr = ['('].concat(str.split('')).concat([')']);
    let save = "";
    let cutStart = 0;
    let storage = [];
    let num = [];
    const recursion = (i) => {
        if (arr[i] == '(') {
            storage = [];
            cutStart = i;
        };
        if (arr[i + 1] == ')') {
            arr = arr.slice(0, cutStart).concat(arr.slice(i + 2));
            if (save != "") {
                num = storage.filter(e => !isNaN(Number(e))).join('');
                let clon = save.slice();
                for (let i = 0; i < num - 1; i++)
                    save = save.concat(clon);
                save = storage.filter(e => isNaN(Number(e))).join('').concat(save);
            } else {
                save = storage.join('');
            };
            return arr.filter(e => e == '(').length != 0 ? recursion(0) : save;
        }
        storage.push(arr[i + 1]);
        i++
        return recursion(i)
    };
    return recursion(0);
};
//solve(/*Pasale un string como los del ejemplo de abajo, el parentesis exterior multiplica al interior
//usando sus numeros(si los tiene si no multiplica por 1), ademas de concatenarle las letras que contenga
//y asi sucesivamente*/)

//EJEMPLOS:
//solve('3(ab)') => 'ababab'
//solve('2(a3(b))') => 'abbbabbb'
//solve('2(a(2(b)))') => 'abbabb'
//solve('k(a3(b(a2(c))))') => 'kabaccbaccbacc'