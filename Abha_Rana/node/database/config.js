const mongoose=require('mongoose');
const url="mongodb://localhost:27017/bootcamp";
mongoose.Promise=global.Promise;
//db connection
mongoose.connect(url, {useNewUrlParser:true, keepAlive:1}).then((res) =>{
    console.log("connnection established");
}).catch( error =>{
    console.log(error.message);
});
module.exports=mongoose;
 