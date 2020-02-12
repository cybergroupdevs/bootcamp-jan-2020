const model=require('../models');
class Employee
{
    constructor()
    {

    }
    async create(req,res)
    {
       let employeeObj={
           name:req.body.name,
           email:req.body.email,
           phone:req.body.phone,
           address:{
               city:req.body.address.city,
               state:req.body.address.state,
               pincode:req.body.address.pincode
           },
           designation:req.body.designation,
           technologies:req.body.technologies,
            age:req.body.age      
         }
         const employee=await model.employee.save(employeeObj);
         res.send(employee);
   }
    async  update(req,res)
    {       let employeeObj;
            employeeObj = {...employeeObj, ...req.body};
            // (OR) const employee=await model.employee.update({ _id: req.params.id}, {"$set":{"age":req.body.age}});
          const employee=await model.employee.update({ _id: req.params.id}, employeeObj);
          res.send(employee); 
    }
    async delete(req,res)
    {
        const employee=await model.employee.delete({ _id: req.params.id});
        res.send(employee); 
    }
    async index(req,res)
    {
       const employeeObj= await model.employee.get();
        res.send(employeeObj);
    }
    async show(req,res)
    {
       const employeeObj= await model.employee.show({_id:req.params.id});
        res.send(employeeObj);
    }
    
    

}
module.exports= new Employee();