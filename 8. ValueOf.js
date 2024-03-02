/* Metode valueOf() digunakan untuk mengembalikan nilai primitif dari objek 
Number yang Anda panggil. Tipe primitif dalam JavaScript adalah angka, string, 
bigint, symbol, undefined, null, dan boolean. */

// Contoh Number
let x = 45
let num = x.valueOf()
console.log(num)                 
// Output: 45

console.log(typeof num);         
// Output: Number

// Contoh String
let str = "Siuuuuu";
let resStr = str.valueOf();
console.log(typeof resStr);

// Contoh Boolean
let t = true;
let resT = t.valueOf();
console.log(typeof resT);

// Contoh Bigint
const bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue.valueOf()); // Output: 123456789012345678901234567890n



/* <--- Data Types Yang Tidak Tersedia Di ValueOf --->*/

// Contoh Symbol
const symbolValue = Symbol('example');
try {
  console.log(symbolValue.valueOf());
} catch (error) {
  console.log(error); // Output: TypeError: Cannot convert a Symbol value to a string
}

// Contoh Undefined
let un = undefined;
let resUn = un.valueOf();
console.log(typeof resUn);

// Contoh Null
const nullValue = null;
console.log(nullValue.valueOf()); // Output: TypeError: Cannot read property 'valueOf' of null
