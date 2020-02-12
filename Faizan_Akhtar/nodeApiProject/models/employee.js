const mongoose = require('mongoose');
const schema = require('../schemas')
const employeeSchema = mongoose.Schema(schema.employee);
class Employee{
        constructor(){
            this.model=mongoose.model('Employee',employeeSchema)
        }
        async get(criteria={}){
            return this.model.find(criteria)
        }
        async save(employeeObject){
            return this.model.create(employeeObject)
        }
        async update(criteria={},updateObject){
            return this.model.update(criteria,updateObject)
        }
}
module.exports=new Employee();