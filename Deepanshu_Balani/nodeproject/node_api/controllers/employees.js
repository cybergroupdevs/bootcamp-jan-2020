
const model=require('../models')
class Employee{
  constructor(){

  }
     async create(req,res){
          const employeeObj={
            name:req.body.name,
             "email":req.body.email,
             "password":req.body.password,
            "address":req.body.address,
            "phoneNo":req.body.phoneNo,
             "designation":req.body.designation,
             "age":req.body.age,
             "technologies":req.body.technologies
                              }
           const employee=await model.employee.save(employeeObj);
           console.log(employee, 'hahah');
           res.send(employee);
       }

       async update(req,res){
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
         async login(req,res){
            const employeeObj=req.body;
            console.log(employeeObj.email);
            console.log(employeeObj.password);
            const employee= await model.employee.log({"email":req.body.email});
            if(employee.email==req.body.email&&employee.password==req.body.password){
                 const token=await jwtcontroller.login(employee.email,employee.password);
                 res.send(token);
            }

            
        }
}
module.exports= new Employee()