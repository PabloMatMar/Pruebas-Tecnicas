https://www.codewars.com/kata/5842df8ccbd22792a4000245

// Escribir número en forma expandida
// Se le dará un número y deberá devolverlo como una cadena en formato expandido . Por ejemplo:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTA: Todos los números serán números enteros mayores que 0.

function expandedForm(num) {
    return num
        .toString()
        .split('')
        .reverse()
        .map((e, i) => (e * (10 ** i)).toString())
        .filter(e => e !== '0')
        .reverse()
        .join(' + ');
};

// expandedForm(70304); // Should return '70000 + 300 + 4'