/* .isInteger() memeriksa apakah nilai yang diberikan adalah bilangan bulat dan 
mengembalikan nilai boolean. */

// Bilangan Bulat
const a = 10;
const checkA = Number.isInteger(a);
console.log(checkA);
// Output : True

// Bilangan Desimal
const b = 10.45;
const checkB = Number.isInteger(b);
console.log(checkB);
// Output : False

// Bilangan String
const c = "10";
const checkC = Number.isInteger(c);
console.log(checkC);
// Output : False