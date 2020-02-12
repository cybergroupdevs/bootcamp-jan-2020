const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Employee, validateEmployee } = require('../models/employee');


// const employees = [{
//     id: 1,
//     name: 'Shivani Bansal'
// },{
//     id: 2,
//     name: 'Himanshu Sharma'
// }];

router.get('/', (req, res) => {
    res.send('Route Handler for root');
})

router.get('/', (req, res) => { 
    res.send(employees);
});

router.get('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if(!employee) return res.status(404).send('Employee with given id is not available!');

    res.send(employee);
});

router.post('/', async(req, res) => {
    const { error } = validateEmployee(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    let employee = await Employee.findOne({ email: req.body.email });
    console.log(employee);
    if(employee) return res.status(400).send('Employee with this id is already registered');

    const { email, password, firstName, lastName, mobile, role, manager, projects } = req.body;
    employee = new Employee({ email, password, firstName, lastName, mobile, role, manager, projects });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    employee.password = hashedPassword;
    employee = await employee.save();
    res.send(employee);
});

router.put('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if(!employee) return res.status(404).send('Employee with this id does not exist to update');

    const { error } = validateEmployee(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    employees.map(emp => { 
        if(emp.id === parseInt(req.params.id)){
            emp.name = req.body.name
        }
    });
    
    res.send(employees);
});

router.delete('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if(!employee) return res.status(404).send('Employee with given id doesn\'t exist');

    const index = employees.indexOf(employee);
    employees.splice(index, 1);

    res.send(employee);
});

module.exports = router;