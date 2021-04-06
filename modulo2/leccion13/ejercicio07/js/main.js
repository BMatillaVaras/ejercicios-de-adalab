"use strict";

const times = [56, 9, 45, 28, 35];
const average = times.reduce((acc, number) => acc + number) / times.length; // Primero hacemos la suma de todos con la función reduce, y después dividimos esa suma entre la longitud del array.
console.log(average);

const averages = times.reduce((acc, number) => acc + number); // Primero hacemos la suma de todos con la función reduce, y después dividimos esa suma entre la longitud del array.
console.log(averages);
