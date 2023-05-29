// https://www.codewars.com/kata/58d76854024c72c3e20000de

// Invierta todas las demás palabras en una cadena dada, luego devuelva la cadena. Deseche cualquier espacio en blanco inicial o final, mientras se asegura de que haya exactamente un espacio entre cada palabra. Los signos de puntuación deben tratarse como si fueran parte de la palabra en este kata.

//TERRIBLEMENTE MAL EXPLICADO Y EN INGLES ES HASTA PEOR :D

const reverse = str => str
    .split(' ')
    .map((e, i) =>
        i % 2 != 0 ?
            e
                .split('')
                .reverse()
                .join('')
            : e
    )
    .join(' ')
    .trim();

//reverse(/*Pasale un string se considerará palabra aquella separada por espacios, devolverá la cadena con las 
//palabras impares dadas la vuelta */)