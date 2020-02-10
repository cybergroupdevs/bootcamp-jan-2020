const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/cybergroup")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connected to MongoDB...", err));

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  mobile: String,
  role: {
    type: String,
    enum: ["Employee", "Manager", "Admin"],
    default: "Employee"
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  projects: [
    {
      projectName: String
    }
  ]
});

const EmployeeModel = mongoose.model("Employee", employeeSchema);

// async function createEmployee(){
//     const employee = new EmployeeModel({
//         id: 1,
//         email: 'himanshu.sharma@cygrp.com',
//         password: '12345',
//         firstName: 'Himanshu',
//         lastName: 'Sharma',
//         mobile: '7982027061',
//         role: 'employee',
//         projects: [{
//             projectId: 1,
//             projectName: 'Project1'
//         },{
//             projectId: 2,
//             projectName: 'Project2'
//         }]
//     });

//     const result = await employee.save();
//     console.log(result, 'Result');
// }

// createEmployee();

function validateEmployee(employee) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    firstName: Joi.string()
      .min(5)
      .max(50)
      .required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(employee, schema);
}

exports.Employee = Employee;
exports.validate = validateEmployee;
