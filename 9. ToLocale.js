/* Metode toLocaleString() menggunakan format bahasa lokal untuk mengonversi angka dan mengembalikannya sebagai string. 
Dibutuhkan dua argumen, locales dan options , yang menentukan bahasa konversi yang 
ingin Anda gunakan, dan perilaku fungsinya. */

let num = 226537.883;
// US English
console.log(num.toLocaleString('en-US'));     
// Output: 226,537.883

// Romanian (Romania)
console.log(num.toLocaleString('ro-RO'));     
// Output: 226.537,883

// Standard French (especially in France)
console.log(num.toLocaleString('fr-FR'));     
// Output: 226 537,883


// Time Tanpa ToLocaleString
const indoTime = new Date();
const fullTime = indoTime.getFullYear() + '-' + indoTime.getMonth() + '-' + indoTime.getDate();
const hours = indoTime.getHours() + '-' + indoTime.getMinutes() + '-' + indoTime.getSeconds()
console.log(fullTime + ' ' + hours);
// Output : 2023-10-30 20-30-25

// Simple Date Waktu Indonesia Menggunakan ToLocaleString
const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleString('id-ID', options);
console.log(formattedDate);
// Output : Kamis, 30 November 2023

// Simple Date Waktu USA Menggunakan ToLocaleString
const usaDate = new Date();
const detailDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const format = usaDate.toLocaleString('en-US', detailDate);
console.log(format);
// Output : Thursday, November 30, 2023


// British English uses day-month-year order and 24-hour time without AM/PM
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// Output :  "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// // Output :  "2012. 12. 20. 오전 3:00:00"