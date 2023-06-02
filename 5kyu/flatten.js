// https://www.codewars.com/kata/513fa1d75e4297ba38000003

// Para este ejercicio, creará un método plano global. El método toma cualquier cantidad de argumentos y los aplana en una sola matriz. Si alguno de los argumentos pasados ​​es una matriz, los objetos individuales dentro de la matriz se aplanarán para que existan en el mismo nivel que los otros argumentos. Cualquier matriz anidada, sin importar cuán profunda sea, debe aplanarse en el resultado de una sola matriz.

// Los siguientes son ejemplos de cómo se usaría esta función y cuáles serían los resultados esperados:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

const flatten = (...arr) => {
    let check = false;
    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i])) {
            check = true;
            //arr = arr.flat(); //Codewars no reconoce el flat() asi que lo hago manualmente;
            arr = arr.slice(0, i).concat(arr[i]).concat(arr.slice(i + 1));
        };
    if (!check)
        return arr
    return flatten(...arr);
};
//flatten(/*Pasale una lista de argumentos (no objetos), devolvera todos los elementos aplanados en un array, 
//da igual el nivel de anidamiento que tengan los arrays*/)