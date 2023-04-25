https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Complete la función scramble(str1, str2)que devuelve truesi una parte de str1los caracteres se pueden
// reorganizar para que coincidan str2, de lo contrario, devuelve false.

// Notas:

// Solo se utilizarán letras minúsculas (az). No se incluirán signos de puntuación ni dígitos.
// EL RENDIMIENTO DEBE SER CONSIDERADO-
// Ejemplos
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
    let solution = {}
    str1
        .split('')
        .map(e => {
            return (solution[e] >= 1) ? solution[e]++ : solution[e] = 1;
        });

    for (let i = 0; i < str2.length; i++) {
        if (solution[str2[i]] === undefined) return false;
        else if (solution[str2[i]] > 0) solution[str2[i]]--
        else return false;
    }
    return true;
};
//scramble(/*pásale dos strings, si usando letras (una sola vez cada una) del primero puede crear un string como el del segundo devolvera true, si no, devolvera false. Puedes pasarle strings de +100.000 caracteres aun asi tardara menos de 10s en hacerlo */)