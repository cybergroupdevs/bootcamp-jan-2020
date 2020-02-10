const mongoose=require('mongoose');
const schema =require('../schemas')
const empSchema=mongoose.Schema(schema.employee)

class Employee{
    constructor(){
        this.model=mongoose.model('Employee',empSchema)
    }
    async get(criteria={}){
        return this.model.find(criteria);
    }
    async save(employeeObj){
        return this.model.create(employeeObj);
    }
    async update(criteria={},updatedObj){
        return this.model.update(criteria, updatedObj);
    }
    async delete(criteria={}){
        return this.model.deleteOne(criteria);
    }
    



}
module.exports=new Employee();

