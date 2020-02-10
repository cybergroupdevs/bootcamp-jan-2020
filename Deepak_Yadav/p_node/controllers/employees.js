const model = require("../models");
class Employee {
  constructor() {
    //
  }

  async create(req, res) {
    let employeeObj = {
      name: req.body.fname,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      designation: req.body.designation,
      password:req.body.password
      /*aDdress: {
        city: req.body.address.city,
        state: req.body.address.state,
        country: req.body.address.country,
        pinCode: req.body.address.pinCode
      },*/
      /*designation: req.body.designation,
      age: req.body.age,
      technologies: req.body.technologies*/
    };
    const employee = await model.employee.save(employeeObj);
    res.send(employee);
  }
  async update(req, res) {
	const employee = await model.employee.update({_id: req.params.id },{"$set":{Email:req.body.Email}});
	 //let employeeObj;  or
	//employeeObj = { ...employeeObj, ...req.body };
    //const employee = await model.employee.update(
      //{ _id: req.params.id },
      //employeeObj
    //);
    res.send(employee);
  }
  async delete(req, res) {}
  async index(req, res) {
    const employeeList = await model.employee.get();
    res.send(employeeList);
  }
  async show(req, res) {
	  const employeeList=await model.employee.get({_id:req.params.id});
	  res.send(employeeList)
  }
}
module.exports = new Employee();
