const model = require("../models");
class Employee {
  constructor() {
  }

  async create(req, res) {
    let employeeObj = {
      firstName: req.body.fName,
      lastName: req.body.lName,
      email: req.body.email,
      designation: req.body.designation,
      password: req.body.password
    };
    const employee = await model.employee.save(employeeObj);
    res.send(employee);
  }
  async update(req, res) {
	const employee = await model.employee.update({_id: req.params.id },{"$set":{email:req.body.email}});
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
  async index(req,res) {
    const employee = await model.employee.get()
    res.send(employee);
  }
}
module.exports = new Employee();