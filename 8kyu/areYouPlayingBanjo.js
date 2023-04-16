https://www.codewars.com/kata/53af2b8861023f1d88000832

// Crea una función que responda a la pregunta "¿Estás tocando el banjo?".
// Si tu nombre comienza con la letra "R" o "r" minúscula, ¡estás tocando el banjo!

// La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:

// name + " plays banjo" 
// name + " does not play banjo"
// Los nombres dados son siempre cadenas válidas.

function areYouPlayingBanjo(name) {

    if (/^[R]/.test(name) || /^[r]/.test(name)) return name + " plays banjo";
    else return name + " does not play banjo";
};

//areYouPlayingBanjo(/*Pásale un string, si el mismo comienza por r o R devolvera playing a banjo si no devolverá lo contrario */)