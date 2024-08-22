import express from "express";

const app = express();

app.get('/', function(req,res){
   res.cookie("name", "Abhi");                                   // kisi bhi route se cookie kaise set krte hein aur read bhi kaise krte ho
   res.send("done");
})

app.listen(3000);