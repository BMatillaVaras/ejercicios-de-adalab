let age = 0.5;
if (age <= 1) {
  console.log(`La edad de tu perro equivale a ${age * 15} años`);
} else if (age <= 2) {
  console.log(
    `La edad de tu perro equivale a ${(age - 1) * 15 + (age - 1) * 9} años`
  );
} else {
  console.log(`La edad de tu perro equivale a ${15 + 9 + (age - 2) * 5} años`);
}
