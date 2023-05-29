// ##2 - Número de Fibonacci

// En términos matemáticos, la secuencia f(n)de números de Fibonacci está definida por la relación de recurrencia

// f(n) = f(n-1) + f(n-2)

// con valores semilla

// f(1) = 1yf(2) = 1

// #Tu tarea

// Tienes que crear la función fibonacci que recibe n y devuelve f(n). Tienes que usar la recursividad.

const fibonacci = n => {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};


