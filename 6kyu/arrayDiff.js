https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el
//resultado.

// Debe eliminar todos los valores de la lista a, que están presentes en la lista b manteniendo su orden.

// arrayDiff([1,2],[1]) == [2]
// Si un valor está presente en b, todas sus ocurrencias deben eliminarse del otro:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let solution = [];
    let check = false;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++)
            if (a[i] === b[j]) check = true

        if (!check) solution.push(a[i]);
        check = false;
    };
    return solution;
};

// arrayDiff(/*Pásale dos argumentos que sean dos arrays(de numeros o de lo que sea(extra)) devolverá un array cuyos elementos existan sólo en el primer array(en el orden en el que estaban) */)