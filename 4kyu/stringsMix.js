// https://www.codewars.com/kata/5629db57620258aa9d000014

// Dadas dos cadenas s1 y s2, queremos visualizar cuán diferentes son las dos cadenas. Solo tendremos en cuenta las letras minúsculas (de la a a la z). Primero, contemos la frecuencia de cada letra minúscula en s1 y s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 tiene 4 'a', 2 'b', 1 'c'

// s2 tiene 3 'a', 3 'b', 1 'c', 1 'd'

// Entonces, el máximo para 'a' en s1 y s2 es 4 por s1; el máximo para 'b' es 3 por s2. En lo que sigue no consideraremos letras cuando el máximo de sus ocurrencias sea menor o igual a 1.

// Podemos resumir las diferencias entre s1 y s2 en la siguiente cadena: "1:aaaa/2:bbb" donde 1 en 1:aaaa representa la cadena s1 y aaaa porque el máximo de a es 4. De la misma manera 2:bbb representa la cadena s2 y bbb porque el máximo de b es 3.

// La tarea es producir una cadena en la que cada letra minúscula de s1 o s2 aparezca tantas veces como su máximo si este máximo es estrictamente mayor que 1 ; estas letras irán precedidas del número de la cadena donde aparecen con su valor máximo y :. Si el máximo está tanto en s1 como en s2, el prefijo es =:.

// En el resultado, las subcadenas (una subcadena es por ejemplo 2:nnnnn o 1:hhh; contiene el prefijo) estarán en orden decreciente de su longitud y cuando tengan la misma longitud serán ordenadas en orden lexicográfico ascendente (letras y dígitos - más ordenados con precisión por punto de código); los diferentes grupos estarán separados por '/'. Ver ejemplos y "Pruebas de ejemplo".

// Esperemos que otros ejemplos puedan aclarar esto.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// mix("Are the kids at home? aaaaa fffff","Yes they are here! aaaaa fffff")

function mix(s1, s2) {
    const ocurrence1 = {};
    const ocurrence2 = {};
    s1.split('').map(e => {
        if (/[a-z]/.test(e))
            return ocurrence1[e] == undefined ? ocurrence1[e] = [1, 1, e, null] : ocurrence1[e][0]++
    });
    s2.split('').map(e => {
        if (/[a-z]/.test(e))
            return ocurrence2[e] == undefined ? ocurrence2[e] = [1, 2, e, null] : ocurrence2[e][0]++
    });

    const fusion = {};

    for (const key in ocurrence1) {
        if (ocurrence2[key] !== undefined && ocurrence1[key][0] == ocurrence2[key][0]) {
            ocurrence1[key][3] = '=';
            fusion[key] = ocurrence1[key];
        };
        if (ocurrence2[key] !== undefined && ocurrence1[key][0] > ocurrence2[key][0])
            fusion[key] = ocurrence1[key];
        if (ocurrence2[key] == undefined) fusion[key] = ocurrence1[key];
    };
    for (const key in ocurrence2) {
        if (ocurrence1[key] !== undefined && ocurrence2[key][0] > ocurrence1[key][0])
            fusion[key] = ocurrence2[key];
        if (ocurrence1[key] == undefined) fusion[key] = ocurrence2[key];
    };

    let representData = [];
    let arrToSort = [];
    for (const key in fusion) {
        if (fusion[key][0] > 1) {
            fusion[key][3] == '=' ? representData.push('=') : representData.push(fusion[key][1]);
            representData.push(':');
            for (let i = 0; i < fusion[key][0]; i++) {
                representData.push(fusion[key][2]);
            };
            arrToSort.push(representData.join(''));
            representData = [];
        };
    };

    return arrToSort
        .sort((a, b) => {
            if (b.length - a.length != 0) return b.length - a.length
            else {
                if (a[0] > b[0]) return 1;
                if (a[0] < b[0]) return -1;
                if (a[2] > b[2]) return 1;
                if (a[2] < b[2]) return -1;
            }
        })
        .join('/');
};
//mix(/*Pasale dos strings, comprobará que letras se repiten dos o mas veces en cada string, devolverá la cantidad de dicha letra con un 1 o 2 en funcion de a que string pertenezca la mayor repeticion de la letra, en caso de repetirse iguale en ambos, pondra =, los ordenadra en orden descendente acorde a su longitud y cuando esta se equipare los ordenara lexicograficamente en orden ascendente */)