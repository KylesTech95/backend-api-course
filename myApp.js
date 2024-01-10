require('dotenv').config()
let bodyParser = require('body-parser')
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

// Chain Middleware to Create a Time Server
app.get('/now', function(req,res,next){
    req.time = new Date().toString()
    next();
},function(req,res){
    res.send({time: req.time})
})

// build echo server
app.get("/:word/echo", function(req,res){
    let { word } = req.params
    res.json({
        echo: word
    })
    
})

// Get Query Parameter Input from the Client
app.get("/name", function(req,res){
    var firstName = req.query.first
    var lastName = req.query.last
    var { first: firstName, last: lastName } = req.query;

    res.json({
        name: `${firstName} ${lastName}`
    })
})

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: true}))






// Get Data from POST Requests
app.post("/name",function(req,res){
    var firstName = req.query.first
    var lastName = req.query.last
    var { first: firstName, last: lastName } = req.body;

    res.json({
        name: `${firstName} ${lastName}`
    })
})



















 module.exports = app;
