const express =require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app=express();
const database=require('./database/config')
app.use(bodyParser.json());
 
require('./routes/route.js')(app)
 

 app.post('/signIn',signIn);
 app.get('/welcome',welcome);
 app.post('/refresh',refresh);
 app.listen(4000,()=>{
    console.log("Listening port 4000")
})
