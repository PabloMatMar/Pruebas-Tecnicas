https://www.codewars.com/kata/52e1476c8147a7547a000811

// Debe escribir expresiones regulares que validarán una contraseña para asegurarse de que cumpla
// con los siguientes criterios:

// Al menos seis caracteres de largo
// contiene una letra minúscula
// contiene una letra mayúscula
// contiene un dígito
// solo contiene caracteres alfanuméricos (tenga en cuenta que '_'no es alfanumérico)

const REGEXP = /^(?=[A-Za-z0-9]*\d)(?=[A-Za-z0-9]*[A-Z])(?=[A-Za-z0-9]*[a-z])\S{6,}$/;