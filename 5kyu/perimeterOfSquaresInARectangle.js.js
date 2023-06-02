// https://www.codewars.com/kata/559a28007caad2ac4e000083

// El dibujo muestra 6 cuadrados cuyos lados tienen una longitud de 1, 1, 2, 3, 5, 8. Es fácil ver que la suma de los perímetros de estos cuadrados es: 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

//VER EL DIBUJO EN EL ENLACE

// La función perímetro tiene por parámetro n donde n + 1 es el número de cuadrados (se numeran del 0 al n) y devuelve el perímetro total de todos los cuadrados.



const perimeter = n => {
    let arr = [0, 1];
    for (let i = 0; i < n; i++)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr.reduce((a, b) => a + b, 0) * 4;
};
//perimeter(/*Pasale un numero, extraera todos numeros de fibonnaci hasta el indice n + 1, tomara cada numero 
//como el lado de un cuadrado, sumara todos los lados y lo multiplicara por cuatro obteniendo la suma de todos 
//los perimetros*/)