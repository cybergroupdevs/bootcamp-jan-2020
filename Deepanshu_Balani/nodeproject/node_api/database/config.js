const mongoose=require('mongoose');
const url="mongodb://localhost:27017/bootcamp"
mongoose.Promise=global.Promise;
mongoose.connect(url,{useNewUrlParser:true, keepAlive:1}).then((res)=>{

   console.log("connection estabilishedconsole")
   console.log(res);


}).catch(error=>{
    console.log(error.message)
})    //option//keep alive keeps conncetion open for some requests
module.exports=mongoose;
