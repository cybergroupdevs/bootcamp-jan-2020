const express=require('express')
const bodyParser= require('body-parser')
const database= require('./database/config')
const app=express();

app.use(bodyParser.json());

require('./routes/route.js')(app);


app.listen(3000, ()=>{
    console.log("listening here at 3000")
})
