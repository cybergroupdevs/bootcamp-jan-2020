const model= require('../models')
class Employee{
    constructor(){
    }

//post request
    async create(req,res){
        let employeeObj={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            gender:req.body.gender,
            phoneNo:req.body.phoneNo,
            joiningDate:req.body.joiningDate,
            role:req.body.role,
            experience:req.body.experience,
            projectManager:req.body.projectManager
        }
        console.log(employeeObj);
        const employee=await model.employee.save(employeeObj);
        res.send(employee);
    }

//put request
    async update(req,res){

        let employeeObj;
        employeeObj={...employeeObj, ...req.body};
        console.log(employeeObj);
        const employee=await model.employee.update({_id: req.params.id},employeeObj);
       
        res.send(employee);
    }

//delete request
    async delete(req,res){
        console.log(req.params._id)
        const employee=await model.employee.delete({_id: req.params.id})
        res.send("deleted!!!!!!");
    }

//get request for specific employee
    async show(req,res){
        const employee=await model.employee.get({_id: req.params.id})
        res.send(employee)

    }

//get request for all employees
    async index(req,res){
        const employee=await model.employee.get();
        res.send(employee)
        
    }
}

module.exports= new Employee()