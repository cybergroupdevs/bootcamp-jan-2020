const mongoose=require('mongoose');

const url="mongodb://localhost:27017/nodeJWT"


mongoose.Promise=global.Promise;

mongoose.connect(url,{useNewUrlParser:true,keepAlive:1}).then((res)=>{
    console.log("Established connection  with database");
    //console.log(res);
}).catch(error=>{
    console.log(error.message);
})
module.exports=mongoose;