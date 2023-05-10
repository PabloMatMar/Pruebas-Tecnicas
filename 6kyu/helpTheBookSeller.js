// https://www.codewars.com/kata/54dc6f5a224c26032800005c

// Un librero tiene muchos libros clasificados en 26 categorías etiquetadas A, B,... Z. Cada libro tiene un código cde 3, 4, 5 o más caracteres. El primer carácter de un código es una letra mayúscula que define la categoría del libro.

// En la lista de existencias del librero, cada código cva seguido de un espacio y de un número entero positivo n (int n >= 0) que indica la cantidad de libros de ese código en existencia.

// Por ejemplo, un extracto de una lista de existencias podría ser:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// Se le dará una lista de existencias (por ejemplo, L) y una lista de categorías en letras mayúsculas, por ejemplo:

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// y tu tarea es encontrar todos los libros de L con códigos pertenecientes a cada categoría de M y sumar su cantidad según cada categoría.

// Para las listas L y M de ejemplo, debe devolver la cadena (en Haskell/Clojure/Racket/Prolog una lista de pares):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// donde A, B, C, W son las categorías, 20 es la suma del libro único de la categoría A, 114 la suma correspondiente a "BKWRK" y "BTSQZ", 50 correspondiente a "CDXEF" y 0 a la categoría 'W' ya que no hay código que comience con W.

// Si L o M están vacíos, la cadena de retorno es ""(Clojure/Racket/Prolog debería devolver una matriz/lista vacía en su lugar).

// Notas:
// En el resultado los códigos y sus valores están en el mismo orden que en M.

const stockList = (l, m) => {
    if (l.length == 0 || m.length == 0) return '';
    let sum = {};
    let stock = {};
    l.map(e => e
        .split(' ')
        .map((el, i, arr) => {
            if (i == 0)
                sum[el[0]] == undefined ? sum[el[0]] = Number(arr[1]) : sum[el[0]] = sum[el[0]] + Number(arr[1]);
        })
    );
    m.map(e => sum[e] == undefined ? stock[e] = 0 : stock[e] = sum[e]);
    let arr = [];
    let stockIndex = [];
    for (const key in stock) {
        arr.push(`(${key} :`);
        arr.push(` ${stock[key]})`);
        stockIndex.push(arr.join(''));
        arr = [];
    }
    return stockIndex.join(' - ');
};

//stockList(Pasale dos arrays, uno que contenga elementos strings formados por una palabra en mayusculas,
// un espacio y un número, del cual sólo se tendra en cuenta la primera letra y el número, un segundo array
// que contendra letras mayusculas como elementos. Devolverá la suma de los numeros de cada letra que
// encuentre en el primer array que coincida con las letras del segundo, lo hara en forma de string tal que
// asi '(A - 100) - (B - 187)')