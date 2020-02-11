const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const app = express();
const database = require('./database/config');
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors())

require('./routes/route.js')(app);
app.post('/login', (req,res) => {

    const user = {
        id :1,
        username:"shivani",
        password:"123"
    }
    
    jwt.sign({user}, "secretkey", (err, token) => {
        res.json({
            token 
        })
})

    })
 
app.get("/api",(req,res)=>{
    console.log("Hello, This is node")
    res.send({"text": "Welcome to api"});
});

app.listen(5000, () =>{
    console.log("Listening port 5000");
})

app.get("/",(req,res)=>{
    console.log("Hello, This is node")
    res.send({"text": "Welcome to Node.js"})
})
app.post("/company",(req,res)=>{
    console.log(req.body)
    res.send({session: `users info:${req.body.year}`})
})
app.post("/info",(req,res)=>{
    console.log(req.body)
    res.send({name: `${req.body.name}`,age: `${req.body.age}`,address: `${req.body.address}`})
})


