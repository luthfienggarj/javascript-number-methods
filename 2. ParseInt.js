/* ParseInt() sangat mirip dengan metode number(), parseInt() memformat string menjadi 
bilangan bulat. Bilangan Bulat Paling Rendah ( Mirip Math.Floor )*/

// Normal Number Method
let a = parseInt('12.99');
console.log(a);
// Output : 12

let b = '15.25'
let resB = parseInt(b);
console.log(resB);
// Output : 15

// String & Number Method
// Yang Terbaca Pertama Kali Adalah Kata Pertama
let c = parseInt('12 Data');
console.log(c);
// Output : 12

let d = 'Data 12'
let resD = parseInt(d);
console.log(resD);
// Output : NaN


// Soal 1 (ParseInt Bilangan String)
let e = parseInt('12.34');
console.log(e);
// Output : 12

// Soal 2 (Angka Binary Menjadi Bilangan Bulat)
let f = '1010';
let resF = parseInt( f.split().reverse().join(''), 2 );
console.log(resF);
// Output : 10

// Soal 3 (Hexadecimal Menjadi Bilangan Bulat)
let hexToInt = hex => parseInt(hex, 16) 
let g = hexToInt('1A');
console.log(g);
// Output : 26