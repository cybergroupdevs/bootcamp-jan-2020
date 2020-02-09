const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express();
const database = require('./database/config')
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

require('./routes/route.js')(app);

app.listen(3001, () =>{
    console.log("Listening port 3001");
})
app.get("/",(req,res)=>{
    console.log("Hello, This is node")
    res.json({"text": "Welcome to the api"})
})

app.post("/bootcamp",(req,res)=>{
    console.log(req.body)
    res.send({session: `Bootcamp session:${req.body.year}`})
})
app.post("/info",(req,res)=>{
    console.log(req.body)
    res.send({name: `${req.body.name}`,age: `${req.body.age}`,address: `${req.body.address}`})
})