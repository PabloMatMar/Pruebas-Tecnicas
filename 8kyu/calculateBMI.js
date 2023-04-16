https://www.codewars.com/kata/57a429e253ba3381850000fb/discuss

// Escriba la función bmi que calcula el índice de masa corporal (bmi = peso / altura 2 ).

// si bmi <= 18.5 devuelve "Bajo peso"

// si bmi <= 25.0 devuelve "Normal"

// si bmi <= 30.0 devuelve "Sobrepeso"

// si bmi > 30 devolver "Obeso"

function bmi(weight, height) {

    const bmi = weight / height ** 2

    if (bmi <= 18.5) return "Underweight";
    else if (bmi <= 25.0) return "Normal";
    else if (bmi <= 30.0) return "Overweight";
    else return "Obese";

};

// bmi(/*Pasale dos argumentos numericos, el primero el peso y el segundo la altura y te devolvera el indice de masa corporal*/)

//Se basa en medidas americanas, pero solo pasale dos numeros.