https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos.

// Si a la función se le pasa una cadena de PIN válida, devuelva true, de lo contrario, devuelva false.

// Ejemplos ( Entrada --> Salida)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {

    return /^[0-9]{4,4}$/.test(pin) || /^[0-9]{6,6}$/.test(pin) ? true : false

};

// validatePIN(/*Pasale un string que contenga o 4 o 6 digitos */)