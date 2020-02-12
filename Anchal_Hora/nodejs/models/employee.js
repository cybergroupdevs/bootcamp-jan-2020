const mongoose = require("mongoose");
const schema = require("../schemas");
const employeeSchema = mongoose.Schema(schema.employee);
class Employee {
  constructor() {
    this.model = mongoose.model("Employee", employeeSchema);
  }
  async get(criteria = {}) {
    return this.model.find(criteria);
  }
  async save(empObj={}){
    return this.model.add(empObj)
  }
  async save(employeeObj = {}) {
    return this.model.create(employeeObj);
  }
  async update(criteria={}){
    return this.model.update(criteria)
  }
  async delete(criteria={}){
    return this.model.delete(criteria)
  }
  async find(criteria={}){
    return this.model.find(criteria)
  }

  
  }
  module.exports = new Employee();
