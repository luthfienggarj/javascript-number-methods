/* Seperti namanya, .toExponential() mengubah angka menjadi string dan 
mengembalikannya dalam format eksponensial. */

// Mengubah console.log() Menjadi cl
const cl = console.log.bind("console");

// Normal toExponential
let a = 13;
let resA = a.toExponential();
cl(resA);

// Dikali 2
let b = 50;
let resB = b.toExponential(2);
cl(resB);