const model = require("../models");
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
        username: "Anchal",
        password: "@nchal1995",
        role: "Intern"
    }
    jwt.sign({user: {username: loginObject.username, role: loginObject.role}},'secretkey',{ expiresIn: '1h' },(err,token)=>{
        res.json({
            token:token
        });
    });

}
}
module.exports =new Employee();