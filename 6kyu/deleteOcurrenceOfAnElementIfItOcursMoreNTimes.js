https://www.codewars.com/kata/554ca54ffa7d91b236000023
// ¡Suficiente es suficiente!
// Alice y Bob estaban de vacaciones. Ambos tomaron muchas fotos de los lugares en los que han estado y ahora quieren mostrarle a Charlie toda su colección. Sin embargo, a Charlie no le gustan estas sesiones, ya que el motivo suele repetirse. No le gusta ver la torre Eiffel 40 veces.
// Él les dice que solo se sentará durante la sesión si muestran el mismo motivo la mayoría de las N veces. Afortunadamente, Alice y Bob pueden codificar el motivo como un número. ¿Puedes ayudarlos a eliminar números de manera que su lista contenga cada número solo hasta N veces, sin cambiar el orden?

// Tarea
// Dada una lista y un número, cree una nueva lista que contenga cada número listcomo máximo N, sin reordenar.
// Por ejemplo, si el número de entrada es 2, y la lista de entrada es [1,2,3,1,2,1,2,3], toma [1,2,3,1,2], suelta el siguiente [1,2]ya que esto conduciría a 1y 2estar en los 3tiempos de resultado, y luego toma 3, lo que lleva a [1,2,3,1,2,3].
// Con list [20,37,20,21]y number 1, el resultado sería [20,37,21].


function deleteNth(arr, n) {
    let obj = {};
    let diferents = arr
        .filter((e, i) => arr.indexOf(e) === i)
        .map(e => obj[e] = 0);
    return arr
        .map(e => {
            if (obj[e] < n) {
                obj[e]++
                return e
            }
        })
        .filter(e => e !== undefined);
};
//deleteNth(/*Pásale un array como primer parametro y un numero como segundo: eleminará del array los
// elementos excedentes que sobrepasen el limite de repeticion que le pases como numero en el segundo
// parametro. Mantendra el orden inicial */)