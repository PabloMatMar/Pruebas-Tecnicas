// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

// Hay una serie de cadenas. Todas las cadenas contienen letras similares excepto una. ¡Intenta encontrarlo!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Las cadenas pueden contener espacios. Los espacios no son significativos, solo importan los símbolos que no son espacios. Por ejemplo, una cadena que contiene solo espacios es como una cadena vacía.

// Está garantizado que la matriz contiene más de 2 cadenas.

const findUniq = arr => {
    arr = arr.filter((e, i, ARR) => ARR.indexOf(e) == ARR.lastIndexOf(e))
    let uniques = [];
    let extraerUnico = [];
    for (let i = 0; i < arr.length; i++) {
        const element = [arr[i].toLowerCase().split('').sort().filter((e, i, arr) => arr.indexOf(e) == i).join(''), i, false];
        uniques.push(element);

        if (!extraerUnico.includes(element[0]))
            extraerUnico.push(element[0])
        else {
            uniques[i][2] = true;
            for (let j = 0; j < uniques.length; j++)
                if (uniques[j][0] == uniques[i][0])
                    uniques[j][2] = true;
        };
    };
    return arr[uniques.filter(e => e[2] == false)[0][1]];
};

//findUniq(/*Pasale un array de strings puede ser de longitud elevada, devolverá el elemento que sea unico (no 
//tendra en cuenta minusculas y mayusculas para la unicidad ni caracteres repetidos o con el orden alterado) */)

//Eejmplos:
['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'], 'BbBb';
['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'], 'foo';
['silvia', 'vasili', 'victor'], 'victor';
['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'], 'Harry Potter';
['    ', 'a', ' '], 'a';