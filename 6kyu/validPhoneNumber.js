// Escriba una función que acepte una cadena y devuelva verdadero si tiene la forma de un número de teléfono.
// Suponga que cualquier número entero del 0 al 9 en cualquiera de los puntos producirá un número de teléfono válido.

// Solo preocúpese por el siguiente formato:
// (123) 456-7890 (no olvide el espacio después del cierre de paréntesis)

// Ejemplos:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false


const validPhoneNumber = num => /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(num);
//validPhoneNumber(/*Pasale un string numerico de diez digitos en formato '(000) 000-0000' si no lo cumples
// devolverá false, en caso de hacerlo devolverá true  */)


//Y esta de regalo
const numeroMovilEspanol = num => /^(6|7)\d{8}$/.test(num);