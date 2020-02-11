
const model=require('../models')
const jwt = require('jsonwebtoken')
const fs   = require('fs');
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
  /* signIn =(req,res)=>{
    let loginobj=req.body;
    const employee= model.employee.find();
    if(email&&password){

         if(loginobj.email===employee.email&&loginobj.password===employee.password){
    let token=jwt.sign({user: loginObj},'secretkey',(err,token)=>{
        res.json({
            success:true,
            message:'Authentication successful',
            token:token
        });
    });
    }
}
}*/
}
module.exports= new Employee()