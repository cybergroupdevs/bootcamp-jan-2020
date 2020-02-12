const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const app = express();
const database = require('./database/config');
app.use(bodyParser.json());
var cors = require('cors')
const model =require('./models');
app.use(cors());

app.use(express.json()); //Read

require('./routes/route.js')(app);


app.post('/login', (req,res) => {

    
        // id :req.body._id,
        email = req.body.email;
        password = req.body.password;

    user = model.employee.search({ email: "email", password:"password"})

    if (user != null){
        jwt.sign({user}, "secretkey", (err, token) => {
            res.json({
                token 
            })
        
    })

    }

    else{
        console.log("error");

    }

    // async find(req,res){
    //     const employee = await model.employee.get({_id: req.params.parameter})
    //     res.send(employee)
    // }
    
//     if (user.username=="shivani" && user.password=="123" ){
//     jwt.sign({user}, "secretkey", (err, token) => {
//         res.json({
//             token 
//         })
    
// })
//     }
//     else{
//         console.log("error")
//     }

// })
 
// app.get("/api",(req,res)=>{
//     console.log("Hello, This is node")
//     res.send({"text": "Welcome to api"});
// });

// app.get("/",(req,res)=>{
//     console.log("Hello, This is node")
//     res.send({"text": "Welcome to Node.js"})
// })
// app.post("/company",(req,res)=>{
//     console.log(req.body)
//     res.send({session: `users info:${req.body.year}`})
// })
// app.post("/info",(req,res)=>{
//     console.log(req.body)
//     res.send({name: `${req.body.name}`,age: `${req.body.age}`,address: `${req.body.address}`})
// })

})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening port ${port}`);
})
