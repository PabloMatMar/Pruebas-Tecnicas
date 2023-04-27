https://www.codewars.com/kata/5262119038c0985a5b00029f

// Defina una función que tome un argumento entero y devuelva un valor lógico trueo falsedependiendo de si el entero es primo.

// Según Wikipedia, un número primo (o primo) es un número natural mayor 1que no tiene divisores positivos aparte de 1y él mismo.

// Requisitos
// Puede suponer que se le dará una entrada de número entero.
// No puede suponer que el número entero será solo positivo. También se le pueden dar números negativos ( o 0).
// NOTA sobre el rendimiento : no se requieren optimizaciones sofisticadas, pero las soluciones más triviales pueden agotarse. Los números van hasta 2^31 (o similar, dependiendo del idioma). Recorrer todo el camino hasta n, o n/2, será demasiado lento.
// Ejemplo
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(numero){
    if(numero<2||(numero%2==0&&numero!=2))
       return false;
    for(let x=3; x*x<=numero; x+=2)
       if( numero%x==0 )
          return false;
    return true;
};

//isPrime(/*Pásale un numero entre -2^31 y 2^31 devolverá true si es primo y false si no lo es */)