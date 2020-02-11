const model = require('../models');
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')

class Employee {
  constructor() {}
  async create(req, res) {
    let employeeObj = {
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      address: {
        city: req.body.city,
        state: req.body.state
      },
      designation: req.body.designation,
      emailid: req.body.emailid,
      age: req.body.age,
      technologies: req.body.technologies
    };
    const employee = await model.employee.save(employeeObj);
    res.send(employee);
  }

  async add(req, res) {
    let employeeObj = {
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      address: {
        city: req.body.city,
        state: req.body.state
      },
      designation: req.body.designation,
      emailid: req.body.emailid,
      age: req.body.age,
      technologies: req.body.technologies
    };
    const employee = await model.employee.save(employeeObj);
    res.send(employee);
  }
  
    async update(req, res)  {
      const employeeObj = {
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        address: {
          city: req.body.city,
          state: req.body.state
        },
        designation: req.body.designation,
        emailid: req.body.emailid,
        age: req.body.age,
        technologies: req.body.technologies
      };
        const employeeList=await model.employee.update({"id":req.params.id});
    res.send(employee);
  
    }
  
  async delete(req, res) {
    const employeeList=await model.employee.delete({"id":req.params.id});
    res.send(employee)
}

 
async show(req, res)  {
    const employeeList=await model.employee.get({"id":req.params.id});
    res.send(employee);

}
  async index(req, res)  {
      const employeeList=await model.employee.get();
      res.send(employee);

  }
  async login(req,res){
    let loginObject={
        Name: "req.body.Name",
        password: "req.body.password",
        Email: "req.body.Email"
    }
    
    if(loginObject.Name==="Anchal"&& loginObject.password==="hora" && loginObject.Email==="horaanchal@gmail.com"){
        jwt.sign({user: {Name: loginObj.username, Email: loginObj.Email}},'secretkey',{ expiresIn: '1h' },(err,token)=>{
            res.json({
                token:token
            });
        });
    }
    else{
        console.log("error")
    }
  }
}
module.exports =new Employee();