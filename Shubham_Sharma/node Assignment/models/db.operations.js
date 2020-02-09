const mongoose = require('mongoose');
const schema = require('../schemas');
const employeeSchema = mongoose.Schema(schema.employee_schema);
class Operations{

    constructor(){
        //What is this line doing ?
        this.model = mongoose.model('Employee', employeeSchema);
    }

    async get(criteria = {}){
        return this.model.find(criteria);
    }

    async save(employeeObj){
        return this.model.create(employeeObj);
    }

    async update(criteria ={}, updateObj){
        return this.model.update(criteria, updateObj);
    }
}
module.exports = new Operations();