https://www.codewars.com/kata/5ce399e0047a45001c853c2b

// Consideremos este ejemplo (matriz escrita en formato general):

// ls = [0, 1, 3, 6, 10]

// Sus siguientes partes:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// Las sumas correspondientes son (juntas en una lista): [20, 20, 19, 16, 10, 0]

// La función parts_sums(o sus variantes en otros idiomas) tomará como parámetro una lista ls y devolverá
// una lista de las sumas de sus partes como se definió anteriormente.

// Otros ejemplos:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057,
// 2580168, 2579358, 0]
// notas
// Eche un vistazo al rendimiento: algunas listas tienen miles de elementos.

function partsSums(ls) {
    let sub = ls.reduce((a, b) => a + b, 0)
    return [sub].concat(ls.map((e, i) => e = sub -= ls[i]));
};
//partsSums(/*Pásale un array de numeros (pueden ser mas de mil) devolverá un array con la suma cuyos
// elementos sean la suma de los numeros menos uno de los elementos cada vez */)