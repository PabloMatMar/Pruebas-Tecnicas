https://www.codewars.com/kata/56a921fa8c5167d8e7000053

// Su trabajo es crear una función de validación de contraseña simple, como se ve en muchos sitios web.

// Las reglas para una contraseña válida son las siguientes:

// Tiene que haber al menos 1 letra mayúscula.
// Tiene que haber al menos 1 letra minúscula.
// Tiene que haber al menos 1 número.
// La contraseña debe tener al menos 8 caracteres.
// Se le permite utilizar cualquier método para validar la contraseña.





function password(str) {
    return  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,}$/.test(str);
}
// password(/*Introduce una contraseña que cumpla lo requerido */)