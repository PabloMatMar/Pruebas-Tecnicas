// https://www.codewars.com/kata/526233aefd4764272800036f

// Escriba una función que acepte dos arrays de estructura ( N x N ) y devuelva la suma de los dos. 

const matrixAddition = (arr1, arr2) => arr1.map((e,i) => e.map((el,ind) => el + arr2[i][ind]));

//matrixAddition(/*Pasale dos arrays bidimensionales de NxN sumará cada elemento del subarray con su homologo y
//  devolverá un array NxN con dichas sumas*/)