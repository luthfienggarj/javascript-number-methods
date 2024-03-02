// Metode Number() mengubah string menjadi angka.

// Normal Number Method
let a = Number('12');
console.log(a);
// Output : 12

let b = '15'
let resB = Number(b);
console.log(resB);
// Output : 15

// Mengkalikan Angka
let c = Number(1);
console.log(c * 10);
// Output : 10

// Konversi Boolean, True = 1, False = 0.
// Jika Ingin Dinumerikan hanya bisa di + dan -
let d = true
let resD = Number(d);
console.log(resD); // Output : 1
console.log(resD + 5); // Output : 6
console.log(resD - 5); // Output : -4

let e = false
let resE = Number(e);
console.log(resE); // Output : 0
console.log(resE + 5); // Output : 5
console.log(resE - 5); // // Output : -5
