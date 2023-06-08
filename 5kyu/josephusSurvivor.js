// https://www.codewars.com/kata/555624b601231dc7a400017a


// En este kata tienes que devolver correctamente quién es el "superviviente", es decir: el último elemento de una permutación de Josefo .

// Básicamente, debe asumir que k personas se colocan en un círculo y que se eliminan en pasos de k elementos, así:

//k=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// El enlace anterior sobre la descripción del kata "base" le dará una idea más completa sobre el origen de este tipo de permutación, pero básicamente eso es todo lo que hay que saber para resolver este kata.



const josephusSurvivor = (n, k) => {
    let arr = [];
    for (let i = 1; i <= n; i++)
        arr.push(i);
    let i = k;
    while (arr.length != 1) {
        while (i > arr.length && arr.length != 0)
            i = i - arr.length;
        arr = arr.slice(0, i - 1).concat(arr.slice(i));
        i = i + k - 1;
    };
    return arr[0];
};
//josephusSurvivor(/*Pasale dos argumentos, el numero de personas que se pondran en fila y el numero que indica
// cada cuantas personas debe eliminarse a una, devolverá la ultima persona sin eliminar (designada indice+1)*/)