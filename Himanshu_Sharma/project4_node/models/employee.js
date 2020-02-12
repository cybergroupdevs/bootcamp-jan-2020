const mongoose = require("mongoose");
const Joi = require('joi');

employeeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5   
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024    
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String
    },
    mobile: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Employee', 'Manager', 'Admin'],
        default: 'Employee'
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId
    },
    projects: [{
        projectName: String
    }]
});

const Employee = mongoose.model('Employee', employeeSchema);

// async function createEmployee(){
//     const employee = new Employee({
//         firstName: 'Himanshu'
//     });

//     const result = await employee.save();
//     console.log(result);
// }

function validateEmployee(employee) {
    const schema = {
        email: Joi.string().min(5).required(),
        password: Joi.string().min(5).max(255).required(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string(),
        mobile: Joi.string(),
        role: Joi.string().tags(['Employee', 'Manager', 'Admin'])
    }
    console.log(Joi.validate(employee, schema), 'validateEmployee mein hoon');
    return Joi.validate(employee, schema);
}

module.exports.Employee = Employee;
module.exports.validateEmployee = validateEmployee;