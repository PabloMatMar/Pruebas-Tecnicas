// https://www.codewars.com/kata/59c7e477dcc40500f50005c7

// Una matriz se define como tal odd-heavysi contiene al menos un elemento impar y cada elemento cuyo valor es oddmayor que todos los elementos de valor par.

// p.ej.

// Array [11,4,9,2,8] is odd-heavy,
// because its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy,
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])

// Array [] is not odd-heavy,
// because it does not contain any odd numbers

// Array [3] is odd-heavy,
// because it does not contain any even numbers.
// escriba una función llamada isOddHeavyo is_odd_heavyque acepte una matriz de enteros y devuelva truesi la matriz es odd-heavyotra devolución false.


isOddHeavy = n => {
    let odd = n.filter(e => e % 2 != 0);
    if (odd.length == 0) return false;
    let pair = n.filter(e => e % 2 == 0);
    for (let i = 0; i < odd.length; i++)
        if (pair.map(pair => pair > odd[i] ? false : true).includes(false))
            return false;
    return true;
};
//isOddHeavy(/*Pasale un array de numeros, si todos los numeros impares son mayores que cualquiera de los numeros pares(haya pares o no) devolverá true, si no, devolverá false */)