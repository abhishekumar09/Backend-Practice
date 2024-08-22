we learn and practice about -:
Q1) How to set and read the cookie 
Q2) How to use bcrypt for password encryption and decryption
solution-: 
// we encrypt password by help of bcyrpt , salt and hash
// salt ek random string hoti hei 
// sbse phle ek salt bnte ho lmbi string hoti hei aur phie ek hash bnte ho jo ki password ko change krke kuch bhi lik deta hei and then we mix the salt with hash phir ek random string bnti jo decrypt nhi  hoti hei 

Q3) What is JWT and how to import and export data in it. 
solution -:
 What is JWT?
Ans -: JWT stands for JSON Web Token, and it is a commonly used stateless user authentication standard used to securely transmit information between client and server in a JSON format. A JWT is encoded and not encrypted by default. It is digitally signed using a secret key known only to the server.




Cookie- from server to save a data in browser


// Advantage of cookie
when we go thorugh a browser to any other routes the cookie also go there by default




password = passuguhword

encrypted password =    $2b$10$KDfaCJg8tx./I520m359TOgYxtVSSXsqZsaOMYu9T.Cz3oLis0K/e    





// What is cookieparser ?
Ans-: Cookie-parser is a middleware for handling HTTP cookies in Node. It can be used to extract cookie data from HTTP requests and convert it into a usable format for server-side code. The data can then be parsed to extract individual values like the cookie name, value, and expiration date. The data can be stored in an object or other data structure that can be easily accessed and manipulated by the server-side code.