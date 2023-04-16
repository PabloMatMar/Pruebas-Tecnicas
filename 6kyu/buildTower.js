https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// construir torre
// Construya una torre en forma de pirámide, como una matriz/lista de cadenas, dado un número entero positivo  
//nfloors. Un bloque de pisos se representa con "*" carácter.

// Por ejemplo, una torre con 3pisos se ve así:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// Y una torre con 6pisos se ve así:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let arr = [];
    let arrItems = [];
    let arrBefore = [];
    const item = "*";
    for (let i = 0; i < nFloors; i++) {
        arrBefore = [];
        for (let j = -1; j < i; j++) {
            if (j !== -1) arrItems.push(item.concat(arrBefore));
            else arrItems.push(item);
            arrBefore = [];
            arrBefore.push(item);
            arrBefore = arrBefore.join('');
        }
        arrItems = arrItems.join('')
        arr.push(arrItems);
        arrItems = [];
    }
    let arrFinal = [];
    for (let m = 0; m < arr.length; m++) {
        const numberOfSpace = (arr[arr.length - 1]).length - arr[m].length
        let arrForItem = [];
        for (let n = 0; n < numberOfSpace + 1; n++) {
            const half = numberOfSpace / 2
            if (half !== n) arrForItem.push("")
            else arrForItem.push(arr[m])

        }
        arrForItem = arrForItem.join(' ')
        arrFinal.push(arrForItem)
    }
    return arrFinal;
};

// towerBuilder(/*Pasale un número y devolvera un array con tantos elementos como el valor del número que colocados uno encima de otros mostraran una imagen como la de abajo*/)

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]