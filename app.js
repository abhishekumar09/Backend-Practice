import cookieParser from "cookie-parser";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cookieParser());


// To hash a password:
// Technique 1 (generate a salt and hash on separate function calls):

// app.get('/', function(req,res){

// bcrypt.genSalt(10, function(err, salt) {                                  // 10 means random number are total 10
//     bcrypt.hash("passuguhword", salt, function(err, hash) {
//        console.log(hash); // Store hash in your password DB.
//     });
// });
// })


//    // To check a password:
// app.get('/', function(req,res){
//     // Load hash from your password DB.
//     bcrypt.compare("passuguhword",   "$2b$10$KDfaCJg8tx./I520m359TOgYxtVSSXsqZsaOMYu9T.Cz3oLis0K/e"  , function(err, result) {
//         console.log(result);// result == true
//     });
    
   
//     })


// app.get('/', function(req,res){
//    res.cookie("name", "Abhi");                               // for the set of cookie    // kisi bhi route se cookie kaise set krte hein aur read bhi kaise krte ho
//    res.send("done");
// })

// app.get('/read', function(req,res){
//    console.log(req.cookies);            // use for read the cookie in console
//     res.send("read page");
//  })




// jwt
app.use(cookieParser());
app.get("/", function(req,res){
 let token = jwt.sign({ email: 'abhi@gmail.com' }, 'secret');
res.cookie("token",token);
 //console.log(token);                                             // result ek lmbi si string(token) aaygi jise hm broser ko share krenge 
res.send("done");              // broswer pr share krdia string
})

app.get("/read", function(req,res){
   // console.log(req.cookies.token);
let data= jwt.verify(req.cookies.token, "secret");            // for verify the data same or not
console.log(data);
})

app.listen(3000);