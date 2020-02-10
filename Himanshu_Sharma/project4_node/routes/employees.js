const {Employee, validate} = require('../models/employee'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const employees = await Employee.find().sort('name');
  res.send(employees);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const {email, password, firstName, lastName, mobile, role, manager, projects} = req.body;

  let customer = new Customer(
    {email, password, firstName, lastName, mobile, role, manager, projects}
  );
  customer = await customer.save();
  
  res.send(customer);
});

// router.put('/:id', async (req, res) => {
//   const { error } = validate(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

//   const customer = await Customer.findByIdAndUpdate(req.params.id,
//     { 
//       name: req.body.name,
//       isGold: req.body.isGold,
//       phone: req.body.phone
//     }, { new: true });

//   if (!customer) return res.status(404).send('The customer with the given ID was not found.');
  
//   res.send(customer);
// });

// router.delete('/:id', async (req, res) => {
//   const customer = await Customer.findByIdAndRemove(req.params.id);

//   if (!customer) return res.status(404).send('The customer with the given ID was not found.');

//   res.send(customer);
// });

// router.get('/:id', async (req, res) => {
//   const customer = await Customer.findById(req.params.id);

//   if (!customer) return res.status(404).send('The customer with the given ID was not found.');

//   res.send(customer);
// });

module.exports = router; 