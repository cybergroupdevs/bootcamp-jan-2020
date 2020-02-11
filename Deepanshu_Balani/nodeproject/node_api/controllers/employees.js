
const model=require('../models')
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
}
module.exports= new Employee()