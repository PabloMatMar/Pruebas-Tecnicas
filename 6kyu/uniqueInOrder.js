https://www.codewars.com/kata/54e6533c92449cc251001667

// Implemente la función unique_in_order que toma como argumento una secuencia y devuelve una lista de elementos
//sin ningún elemento con el mismo valor uno al lado del otro y conservando el orden original de los elementos.

// Por ejemplo:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder = function (iterable) {
    if (typeof (iterable) === 'object')
        return iterable
            .filter((item, i) => {
                return item !== iterable[i + 1]
            });
    else
        return iterable
            .split('')
            .filter((item, i) => {
                return item !== iterable[i + 1]
            });

};

//uniqueInOrder(/* recibe un array de elementos y lo devuelve eliminando cualquier elemento que tenga el mismo valor que el anterior (aún habiendo sido eliminado el anterior) */)