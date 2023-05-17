// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

// Escriba un algoritmo que identifique direcciones IPv4 válidas en formato punto-decimal. Las direcciones IP deben considerarse válidas si constan de cuatro octetos, con valores entre 0y 255, inclusive.

// Ejemplos de entradas válidas:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Ejemplos de entradas no válidas:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

const isValidIP = str => {
    let ip = str.split('.');
    if (ip.length != 4) return false;
    for (let i = 0; i < ip.length; i++) {
        if (ip[i] == '' || isNaN(Number(ip[i])) || /[A-Za-z]/.test(ip[i]) || ip[i].includes(' ') || ip[i].includes('\n') || ip[i][0] === '0' && ip[i][1] != undefined || Number(ip[i]) > 255 || Number(ip[i]) < 0 || ip[i] == '-0') return false;
    }
    return true;
};
//isValidIP("Pasale un string de una IPv4 en formato punto-decimal, devolverá true si es valida y false si no")