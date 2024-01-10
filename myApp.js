require('dotenv').config()
let express = require('express');
let app = express();
// app.get("/",function(req,res){
//     res.send('Hello Express')
// })
app.get("/",function(req,res){
    res.sendFile(__dirname + '/views/index.html')
    //root middleware (logger)
})
app.use('/',function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
     next();
})

// middleware
app.use("/public",express.static(__dirname + '/public'))

// rest API
app.get("/json",function(req,res){
    res.json({"message": `${process.env.MESSAGE_STYLE==='uppercase' ? 'HELLO JSON' : 'Hello json'}`})
})
































 module.exports = app;
