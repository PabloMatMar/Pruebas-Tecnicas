https://www.codewars.com/kata/5626b561280a42ecc50000d1


// El número 89 es el primer número entero con más de un dígito que cumple la propiedad parcialmente
// introducida en el título de este kata. ¿De qué sirve decir "Eureka"? Debido a que esta suma da el
// mismo número:89 =8 elevado a 1 + 9 elevado a 2

// Necesitamos una función para recolectar estos números, que pueda recibir dos enteros
// a y b que definen el rango (a y b inclusives) y genera una lista de los números ordenados en el rango
// que cumple con la propiedad descrita anteriormente.

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]


function sumDigPow(a, b) {
    let sum = 0;
    let solution = [];
    for (let i = a; i <= b; i++) {
        number = i.toString().split('');
        for (let j = 1; j <= number.length; j++) {
            sum = sum + Number(number[j - 1]) ** j;
            if (j == number.length && sum == i)
                solution.push(i);
        }
        sum = 0;
    };
    return solution
};
//sumDigPow(/*Pásale dos numeros, devolverá todos los numeros comprendidos entre estos(inclusives) cuya
// suma de sus digitos elevados a p, p+1, p+2... con p=1 sea igual al propio número*/)