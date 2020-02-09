const express=require('express');
const bodyParser=require('body-parser');
const databse=require('./database/config');
const app=express();
app.use(bodyParser.json());
require('./routes/route.js')(app); //passing express obj to  routes
app.listen(3000,()=> {
    console.log("listening at port 3000");
});
app.get("/",(req,res)=>{
    console.log("Hello,this is node");
    res.send({"text":"Welcome to nodejs"});
});

