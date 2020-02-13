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

app.post('/login', async(req,res) => 
{
    // console.log(req.body.email)
    email = req.body.email;
    password = req.body.password;
    console.log(email, password)
    user = await model.employee.search({ email, password})

    if(!user){
        return res.send('Email or Password incorrect');
    }

   
    const token = jwt.sign({designation: user.designation, email: user.email}, 'cybergroup');

    res.header('x-auth-token', token).send('Login Successfully');    
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening port ${port}`);
})
