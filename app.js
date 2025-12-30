const express = require("express"); 
const path = require("path"); 
const app = express(); 

const port = 3000; 


app.get("/api/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","products.html")); 
})


app.listen(port,()=>{
    console.log("Server is running."); 
})