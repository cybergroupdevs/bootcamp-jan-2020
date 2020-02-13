const mongoose = require('mongoose');
const schema = require('../schemas');
const employeeSchema = mongoose.Schema(schema.employee_schema);
class Operations{

    constructor(){
        //What is this line doing ?
        //It is setting the Collection which we are gonna use.
        this.model = mongoose.model('Employee', employeeSchema);
    }

    async get(criteria={}, columns={}){
        return this.model.find(criteria, columns);
    }

    async save(employeeObj){
        return await this.model.create(employeeObj);
    }

    async update(criteria ={}, updateObj){
        return this.model.update(criteria, updateObj);
    }
}
module.exports = new Operations();