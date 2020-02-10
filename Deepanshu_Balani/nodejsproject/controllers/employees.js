
const model=require('../models')
const jwt = require('jsonwebtoken')
class Employee{
  constructor(){

  }
  async create(req,res){
      const employeeObj=req.body;
        const employee=await model.employee.save(employeeObj);
        res.send(employeeObj);
  }

  async     update(req,res){
      const employee=await model.employee.update({"_id":req.params.id},{$set:{"age":req.age}});
       res.send(employee);
}
  async delete(req,res){

    const employee= await model.employee.delete({"_id":req.params.id});
  
res.send("record deleted");
}
async show(req,res){
    const employee=await model.employee.get({"_id":req.params.id});
    res.send(employee);

}
async index(req,res){
    const employeeObj=req.body;
        const employee= await model.employee.get(employeeObj);
      
    res.send({"employees":[employee]});
}
   signIn =(req,res)=>{
    let loginObj={
        username: "bala23@gmail.com",
        password: "bala"
       
    }
    jwt.sign({user: loginObj},'secretkey',(err,token)=>{
        res.json({
            token:token
        });
    });

 
 }
}
module.exports= new Employee()