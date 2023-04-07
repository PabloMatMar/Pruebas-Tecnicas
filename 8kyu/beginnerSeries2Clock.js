https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// El reloj muestra hhoras, mminutos y ssegundos después de la medianoche.

// Su tarea es escribir una función que devuelva el tiempo desde la medianoche en milisegundos.

// Ejemplo:
// h = 0
// m = 1
// s = 1

// result = 61000
// Restricciones de entrada:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
    return solution = h*3600000 + m *60000 + s*1000
}