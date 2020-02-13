const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Employee } = require('../models/employee');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let employee = await Employee.findOne({ email: req.body.email });
    console.log(employee, 'Employee mein hoon!');
    if(!employee) return res.status(400).send('Invalid email or password');

    const isPassword = await bcrypt.compare(req.body.password, employee.password);
    console.log(isPassword, 'Line number 16@auth.js');
    if(!isPassword) return res.status(400).send('Invalid email or password');
    
    const token = jwt.sign({ email: employee.email, role: employee.role }, config.get('jwtPrivateKey'));
    res.header('x-auth-token', token).send('Logged in successfully');
});

function validate(req){
    const schema = {
        email: Joi.string().min(5).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req.body, schema);
}

module.exports = router;