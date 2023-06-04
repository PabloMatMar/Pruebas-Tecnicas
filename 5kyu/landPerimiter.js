// https://www.codewars.com/kata/5839c48f0cf94640a20001d3

// Dado un array arr de cadenas, completa la función calculando el perímetro total de todas las islas. Cada pedazo de tierra estará marcado con 'X' mientras que los campos de agua están representados como 'O'. Considere cada mosaico como un 1 x 1 pedazo de tierra perfecto.

//EJEMPLOS: 

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO'] 

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

const landPerimeter = (arr) => {
    let sum = 0;
    let elementsCountedH = [];
    let elementsCountedV = [];
    arr = arr.map(e => e.split(''));
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr[i].length; j++)
            if (arr[i][j] == 'X') {
                sum = sum + 4;
                let rigth = 1;
                if (!elementsCountedH.includes(`${i},${j + rigth}`))
                    while (j + rigth <= arr[i].length - 1 && arr[i][j + rigth] == 'X') {
                        sum = sum - 2;
                        elementsCountedH.push(`${i},${j + rigth}`)
                        rigth++;
                    };
                let left = 1;
                if (!elementsCountedV.includes(`${i + left},${j}`))
                    while (i + left <= arr.length - 1 && arr[i + left][j] == 'X') {
                        sum = sum - 2;
                        elementsCountedV.push(`${i + left},${j}`)
                        left++;
                    };
            };

    return 'Total land perimeter: ' + sum;
};
// landPerimeter(/*Pasale un array como argumento cuyos elementos sean strings compuestos por O y/o X
// O representa agua, mientras que X representa tierra, devolverá el perimetro de todas las islas.
// El mapa que pases no tiene porque ser cuadrado, ni rectangular, lo resolverá igualmente*/)

//VER IMAGENES MUCHO MAS ILUSTRATIVAS AQUI : https://www.codewars.com/kata/5839c48f0cf94640a20001d3