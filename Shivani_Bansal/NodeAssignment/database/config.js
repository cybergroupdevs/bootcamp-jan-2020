const mongoose = require('mongoose')
const url = "mongodb://localhost/company"  //default port 27017 for mongoose
mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(url,{useNewUrlParser: true, keepAlive:1}).then((res)=>
{
    console.log("Connection established")
    // console.log(res)
}).catch(error =>{
    console.log(error.message)
})
 //removes unwanted parts , parallel connection
module.exports = mongoose;



