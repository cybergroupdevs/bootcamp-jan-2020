const mongoose = require("mongoose");
const employees = require('./routes/employees');

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/cybergroup")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connected to MongoDB...", err));

app.use(express.json());

app.use('/api/employees', employees);

//   app.use('/api/employee', employee);

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
