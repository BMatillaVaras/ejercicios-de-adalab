// modificamos una variable de ámbito global
debugger;
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"

console.log(mySecretLetter()); // devuelve "x"
