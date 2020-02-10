const model=require('../models');
class Employee{
    // constructor(){    By default every  class has a constructor

    // }
    
    async create(req,res){  //create
        let employeeObj={
            name:req.body.name,
            email:req.body.email,
            phoneNo:req.body.phoneNo,
            address:{
                city:req.body.address.city,
                state:req.body.address.state,
                country:req.body.address.country,
                pinCode:req.body.address.pinCode
            },
            designation:req.body.designation,
            age:req.body.age,
            technologies:req.body.technologies

        }
        console.log(model.employee)
        const employee=await model.employee.save(employeeObj);
        res.send(employee);
        
    }
    async update(req,res){  //update record
        const employee=await model.employee.update({"_id":req.params.id},{$set:
            {
              name: req.body.name,
              email:req.body.email
            }})
        res.send(employee);
        
    }
    async delete(req,res){  //delete by id
        const employee=await model.employee.delete({"_id":req.params.id});
        res.send(employee);
        
    }
    async show(req,res){        //get by id
        const employee=await model.employee.get({"_id":req.params.id});
        res.send(employee);
        
        
    }
    async index(req,res){   //get all
        const employee=await model.employee.get();
        res.send(employee);
    }
    
}
module.exports=new Employee();