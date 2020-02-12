const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
const User = require('./schema/users');

app.use(express.json());

app.get('/',(req,res) => {
    res.json({
        message: "welcome to this world"
    });
});

app.get('/api/users', async(req, res) => {
    try{
        let users = await User.find({});
        // users = JSON.stringify(users);
        // users = JSON.parse(users);
        console.log(users);
        res.send(users);
    }catch(err){
        console.log(err);
    }
});


app.post('/posts',verifyToken,(req,res) => {  //protected route 
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message: "Post method",
                authData
            });
        }
    })
});


app.post('/signin',async(req,res) => {
    let user = await User.findOne({email: req.body.email,pass: req.body.pass });
    console.log(user);
    if(!user){
        return res.status(400).send('User with given email, password isn\'t matching');
        }
    else{
    const token = jwt.sign({user}, 'secretkey'); 
    res.json({
        token
    });   } 
    
});

function verifyToken(req, res, next){
    const bearerHeader=req.headers['authorization'];
    console.log("bearereHeader",bearerHeader);
    if(typeof bearerHeader!=='undefined'){
        const bearer=bearerHeader.split(' ');
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }

}

app.listen(5050, ()=>{
    console.log("Server started on port 5050")
})