https://www.codewars.com/kata/51b66044bce5799a7f000003

// Escribe dos funciones que conviertan un número romano a y de un valor entero. Se probarán múltiples
// valores de números romanos para cada función.

// Los números romanos modernos se escriben expresando cada dígito por separado, comenzando con el dígito
// más a la izquierda y omitiendo cualquier dígito con un valor de cero. En números romanos, 1'9''9'0 se
// representa: 1000=M, '9'00=CM, '9'0=XC; resultando en MCMXC. 200'8' se escribe como 2000=MM, '8'=VIII; o
// MMVIII. 1'6''6''6' utiliza cada símbolo romano en orden descendente: MDCLXVI.

// Rango de entrada :1 <= n < '4'000

// En este kata '4' debe representarse como IV, NO como IIII(los "cuatro del relojero").

// Ejemplos
// to roman:
// 2000 -> "MM"
// 1'6''6''6' -> "MDCLXVI"
// 1000 -> "M"
//  '4'00 -> "CD"
//   '9'0 -> "XC"
//   '4'0 -> "XL"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1'6''6''6'
// "M"       -> 1000
// "CD"      -> '4'00
// "XC"      -> '9'0
// "XL"      -> '4'0
// "I"       -> 1

class RomanNumerals {
    static toRoman(num) {

        let solution = [];
        let n = num
            .toString()
            .split('')
            .reverse()
        if (n[0] !== undefined) {

            if (n[0] === '1') solution.unshift("I");
            else if (n[0] === '2') solution.unshift("II");
            else if (n[0] === '3') solution.unshift("III");
            else if (n[0] === '4') solution.unshift("IV");
            else if (n[0] === '5') solution.unshift("V");
            else if (n[0] === '6') solution.unshift("VI");
            else if (n[0] === '7') solution.unshift("VII");
            else if (n[0] === '8') solution.unshift("VIII");
            else if (n[0] === '9') solution.unshift("IX");


        }
        if (n[1] !== undefined) {
            if (n[1] === '1') solution.unshift("X");
            else if (n[1] === '2') solution.unshift("XX");
            else if (n[1] === '3') solution.unshift("XXX");
            else if (n[1] === '4') solution.unshift("XL");
            else if (n[1] === '5') solution.unshift("L");
            else if (n[1] === '6') solution.unshift("LX");
            else if (n[1] === '7') solution.unshift("LXX");
            else if (n[1] === '8') solution.unshift("LXXX");
            else if (n[1] === '9') solution.unshift("XC");

        }
        if (n[2] !== undefined) {
            if (n[2] === '1') solution.unshift("C");
            else if (n[2] === '2') solution.unshift("CC");
            else if (n[2] === '3') solution.unshift("CCC");
            else if (n[2] === '4') solution.unshift("CD");
            else if (n[2] === '5') solution.unshift("D");
            else if (n[2] === '6') solution.unshift("DC");
            else if (n[2] === '7') solution.unshift("DCC");
            else if (n[2] === '8') solution.unshift("DCCC");
            else if (n[2] === '9') solution.unshift("CM");

        }
        if (n[3] !== undefined) {
            if (n[3] === '1') solution.unshift("M");
            else if (n[3] === '2') solution.unshift("MM");
            else if (n[3] === '3') solution.unshift("MMM");

        }
        return solution.join('')
    }

    static fromRoman(str) {
        let solution = [];
        let iV = 0; //es inicial Value no el numero 4 en romano
        let numberRoman = str
            .split('')
            .join(' ')
            .replaceAll('M', '1000')
            .replaceAll('D', '500')
            .replaceAll('C', '100')
            .replaceAll('L', '50')
            .replaceAll('X', '10')
            .replaceAll('V', '5')
            .replaceAll('I', '1')
            .split(' ')
        for (let i = 0; i < numberRoman.length; i++) {
            solution.push(Number(numberRoman[i]))
        }

        for (let i = 0; i < solution.length; i++) {
            if (i !== 0 && solution[i] > solution[i - 1]) solution[i - 1] = - solution[i - 1]

        }

        return solution.reduce(
            (a, c) => a + c, iV
        );
    };
};

//Parametro:  num => un numero normal del 1 al 3999 que convertirá a numero romano.
//Parametro: str => un string que represente un numero romano entre 3999 y 1 y devolvera el numero en
// formato "normal"
