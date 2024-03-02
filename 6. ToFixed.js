/* Metode toFixed() membulatkan angka ke notasi titik tetap tertinggi atau terendah 
terdekat. Dibutuhkan parameter yang menandakan jumlah digit yang harus ditampilkan 
setelah koma desimal. */

// Normal ToFixed
let a = 4.49;
let resA = a.toFixed();
console.log(resA);

// Jika Tanpa Parameter Akan Normal 
let b = 4.49;
let resB = b.toFixed(2);
console.log(resB);