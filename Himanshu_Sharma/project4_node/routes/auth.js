const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Employee } = require('../models/employee');

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

function validate(req){
    
}

module.exports = router;