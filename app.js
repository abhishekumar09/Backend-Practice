import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cookieParser());


// To hash a password:
// Technique 1 (generate a salt and hash on separate function calls):

app.get('/', function(req,res){

bcrypt.genSalt(10, function(err, salt) {                                  // 10 means random number are total 10
    bcrypt.hash("password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
})

// app.get('/', function(req,res){
//    res.cookie("name", "Abhi");                               // for the set of cookie    // kisi bhi route se cookie kaise set krte hein aur read bhi kaise krte ho
//    res.send("done");
// })

// app.get('/read', function(req,res){
//    console.log(req.cookies);            // use for read the cookie in console
//     res.send("read page");
//  })

app.listen(3000);