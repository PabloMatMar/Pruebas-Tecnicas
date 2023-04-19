https://www.codewars.com/kata/52685f7382004e774f0001f7

// Escriba una función que tome un número entero no negativo (segundos) como entrada y devuelva la hora en un formato legible por humanos ( HH:MM:SS)

// HH= horas, rellenado con 2 dígitos, rango: 00 - 99
// MM= minutos, rellenado con 2 dígitos, rango: 00 - 59
// SS= segundos, rellenado con 2 dígitos, rango: 00 - 59
// El tiempo máximo nunca supera los 359999 ( 99:59:59)

// Puede encontrar algunos ejemplos en los accesorios de prueba.

function humanReadable(seconds) {
    let zeroS = '';
    let zeroM = '';
    let zeroH = '';

    if ((seconds - (Math.trunc(seconds / 60) * 60)) < 10) zeroS = '0';
    if (Math.trunc((seconds / 3600 - (Math.trunc(seconds / 3600))) * 60) < 10) zeroM = '0';
    if (Math.trunc(seconds / 3600) < 10) zeroH = '0';

    if (seconds <= 59) return `00:00:${zeroS}${seconds}`;
    if (seconds <= 3599) return `00:${zeroM}${Math.trunc(seconds / 60)}:${zeroS}${seconds - (Math.trunc(seconds / 60) * 60)}`;
    else return `${zeroH}${Math.trunc(seconds / 3600)}:${zeroM}${Math.trunc((seconds / 3600 - (Math.trunc(seconds / 3600))) * 60)}:${zeroS}${seconds - (Math.trunc(seconds / 60) * 60)}`;
};

//humanReadable(/*Pásale un número entre 0 y 359999 que equivaldra a segundos y te devolverá el tiempo expresado en '00:00:00'  */)