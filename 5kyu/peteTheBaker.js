https://www.codewars.com/kata/525c65e51bf619685c000059

// A Pete le gusta hornear algunos pasteles. Tiene algunas recetas e ingredientes. Desafortunadamente, no
// es bueno en matemáticas. ¿Puedes ayudarlo a averiguar cuántos pasteles podría hornear considerando sus
// recetas?

// Escriba una función cakes()que tome la receta (objeto) y los ingredientes disponibles (también un 
//objeto) y devuelva la cantidad máxima de pasteles que Pete puede hornear (entero). Para simplificar,
// no hay unidades para las cantidades (por ejemplo, 1 libra de harina o 200 g de azúcar son simplemente 1
// o 200). Los ingredientes que no están presentes en los objetos, se pueden considerar como 0.

// Ejemplos:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});


function cakes(recipe, available) {
    let keysRecipe = [];
    let keysHave = [];
    let quantities = [];
    
    const iNeed = recipe;
    for (const key in iNeed) {
        keysRecipe.push(key);
    };

    const iHave = available;
    for (const key in iHave) {
        keysHave.push(key);
    };

    if (keysRecipe.length > keysHave.length) return 0;

    for (let i = 0; i < keysRecipe.length; i++) {
        if (!keysHave.includes(keysRecipe[i])) return 0;
        else quantities.push(available[keysRecipe[i]] / recipe[keysRecipe[i]]);
        if (i === keysRecipe.length - 1)
            return quantities
                .sort((a, b) => a - b)
            [0] - (quantities[0] - Math.trunc(quantities[0]));
    };
};

//cakes(/*Pásale como primer argumento un objeto con los ingredientes necesarios(propiedad y
// cantidad (un numero y nada mas) y otro objeto que tenga los ingredientes de los que dispones,
// cantidad y numero) */)