const model = require("../models");
const jwt = require("../jwt");
class Employee {
  
  constructor() {
  }

  async create(req, res) {
    let employeeObject = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      designation: req.body.designation,
      password: req.body.password,
      phoneNo: req.body.phoneNo,
      address: {
        city: req.body.address.city,
        state: req.body.address.state,
        pincode: req.body.address.pincode
      }
    };
    const employee = await model.employee.save(employeeObject);
    res.send(employee);
  }

  async loginAuth(req, res){
    const employee = await model.employee.get(
      { $and : [
        {"email": req.body.email},
        {"password": req.body.password}]
      }, 
      {
        "email": 1,
        "phoneNo": 1,
        "designation": 1,
        "_id": 0
      }
    );
    
    if(employee != null){
        const token = jwt.tokenGenerator(employee);
        res.status('200').send(token);
    }
    else{
        res.status('401').send(employee);
    }
}


  async update(req, res) {
	const employee = await model.employee.update({_id: req.params.id },{"$set":{email:req.body.email}});
    res.send(employee);
  }

  async delete(req, res) {

  }

  async index(req, res) {
    const employee = await model.employee.get();
    res.send(employee);
  }

  async show(req, res) {
	  const employee = await model.employee.get({_id:req.params.id});
	  res.send(employee)
  }

  async index(req,res) {
    const employee = await model.employee.get()
    res.send(employee);
  }
}
module.exports = new Employee();