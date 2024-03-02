/* .isSafeInteger() memeriksa apakah nilai yang diberikan adalah bilangan bulat 
aman dan mengembalikan nilai boolean. Suatu bilangan bulat dianggap sebagai bilangan 
bulat aman jika semua bilangan bulat berada tepat di antara (2^53–1) hingga -(2^53–1)) */

// Contoh : 1
Number.isSafeInteger(220)             
//Output: true

// Contoh : 2
Number.isSafeInteger(-220)            
//Output: true

// Contoh : 3
Number.isSafeInteger(2.2)             
//Output: false

// Contoh : 4
Number.isSafeInteger(978678367894123469410320213)                                                                            
//Output: false