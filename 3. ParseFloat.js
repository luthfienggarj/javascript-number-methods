/* Metode .parseFloat() mem-parsing nilai string dan mengembalikan angka dengan 
nilai desimalnya. */

let a = parseFloat("10.99");
console.log(a);
// Output : 10.99

let b = parseFloat("2.49");
console.log(b);
// Output : 2.49

let c = parseFloat("2.55 25.66");
console.log(c);
// Output : 2.55

let d = parseFloat("Example 25.66");
console.log(d);
// Output : NaN


// Soal 1 (Angka Ribuan Menjadi Desimal)
let one = parseFloat("1,234.56".replace(/,/g, ''));
console.log(one);
// Output : 1234.56

// Soal 2 (Angka Exponensial Menjadi Desimal)
let two = parseFloat("3.14e2");
console.log(two);
// Output : 314

// Soal 3 (Angka Persen Menjadi Desimal)
let three = convert => {
    return parseFloat(convert) / 100;
}
console.log(three("50%"));
// Output : 0.5