/* .isFinite() memeriksa apakah nilai yang diberikan terbatas dan mengembalikan nilai 
boolean. */

// Contoh 1
let x = 10
let a = Number.isFinite(x)
console.log(a)                     
// Output: true

// Contoh 2
let y = -10.99
let b = Number.isFinite(y)
console.log(b)                     
// Output: true

// Contoh 3
let z = "10"
let c = Number.isFinite(z)
console.log(c)                     
// Output: false

// Contoh 4
let zz = 10.222236;
let d = Number.isFinite(zz)
console.log(d)                     
// Output: true