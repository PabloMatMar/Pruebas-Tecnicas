// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Dadas las representaciones de cadena de dos enteros, devuelva la representación de cadena de la suma de esos enteros.

// Por ejemplo:

// sumStrings('1','2') // => '3'
// Una representación de cadena de un número entero no contendrá caracteres además de los diez números "0" a "9".

//NOTA => Podria usar:
//const sumStrings = (a,b) => { 
//   return (BigInt(a) + BigInt(b)).toString();
// }
//Pero eso no es ejercicio ninguno. Asi que voy a hacerlo a pelo sumando digito a digito del string como si no existiera BigInt.

//Queda pendiente aplicar recursividad para hacerlo mas ligero.

const sumStrings = (a, b) => {
    let solution = [];
    let upToTen = false;
    let sum = 0;
    let num = 0;
    if (a.length === b.length) {
        for (let i = a.length - 1; i > -1; i--) {
            upToTen === true ? sum = Number(a[i]) + Number(b[i]) + 1 : sum = Number(a[i]) + Number(b[i]);
            if (sum >= 10) {
                upToTen = true;
                i !== 0 ? num = sum - 10 : num = sum;
                const strNum = num.toString();
                solution.push(strNum);
            } else {
                upToTen = false;
                num = sum;
                const strNum = num.toString();
                solution.push(strNum);
            };
        };
        solution = solution.reverse();
        if (solution[0] === '0')
            solution = solution.slice(1, (solution.length))
        return solution.join('')

    } else {
        if (a.length > b.length) {
            let newNum = [b];
            const zeros = a.length - b.length;
            for (let z = 0; z < zeros; z++)
                newNum.unshift('0');
            newNum = newNum.join('');
            for (let i = a.length - 1; i > -1; i--) {
                upToTen === true ? sum = Number(a[i]) + Number(newNum[i]) + 1 : sum = Number(a[i]) + Number(newNum[i]);
                if (sum >= 10) {
                    upToTen = true
                    i !== 0 ? num = sum - 10 : num = sum;
                    const strNum = num.toString();
                    solution.push(strNum);
                } else {
                    upToTen = false
                    num = sum;
                    const strNum = num.toString()
                    solution.push(strNum)
                };
            };
            solution = solution.reverse()
            if (solution[0] === '0')
                solution = solution.slice(1, (solution.length));
            return solution.join('')

        } else {
            let newNum = [a];
            const zeros = b.length - a.length;
            for (let z = 0; z < zeros; z++)
                newNum.unshift('0');
            newNum = newNum.join('');
            for (let i = b.length - 1; i > -1; i--) {
                upToTen === true ? sum = Number(newNum[i]) + Number(b[i]) + 1 : sum = Number(newNum[i]) + Number(b[i])
                if (sum >= 10) {
                    upToTen = true
                    i !== 0 ? num = sum - 10 : num = sum;
                    const strNum = num.toString()
                    solution.push(strNum)
                } else {
                    upToTen = false
                    num = sum
                    const strNum = num.toString()
                    solution.push(strNum)
                }

            };
            solution = solution.reverse();
            if (solution[0] === '0')
                solution = solution.slice(1, (solution.length));
            return solution.join('');
        };
    };
};
//sumString(Pasale dos argumentos tipo string compuestos por numeros, los sumara como si fueran numeros y devolverá
//el número como un string, puedes usar "numeros" gigantes)