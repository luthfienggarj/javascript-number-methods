/* Metode .toString() mengubah nilai numerik menjadi string. */

let a = 15;
let resA = a.toString();
console.log(resA);
// Output : 15 (String)

let numB = 10;
let b = numB.toString(2); // Angka 2 Bertujuan Mengubah Ke Binary
console.log(b);
// Output : 1010 (Ke Binary)

// Soal 1 (Angka Basis Oktal Ke String)
let one = 1234
let resOne = one.toString(8); // Angka 8 Bertujuan Mengubah Ke Oktal
console.log(resOne);
// Output : 2322

// Soal 2 (Angka Hexadesimal Ke String)
let two = -5678
let resTwo = two.toString(16); // Angka 16 Bertujuan Mengubah Ke Hexadesimal
console.log(resTwo);
// Output : -162e

// Soal 3 (Angka Coma Memiliki 5 Angka Dibelakangnya)
let three = 3.14;
let resThree = three.toFixed(5); // toFixed & Angka 5 Bertujuan Menambahkan 5 Nol Dibelakang
console.log(resThree);