const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const createEmployee = require('./models/employee');
const logger = require('./middleware/logger');
const authenticator = require('./middleware/authenticator');
const employeeRoutes = require('./routes/employees');
const authRoutes = require('./routes/auth');
const config = require('config');

//Fatal Error in case of non-configuration of key
if(!config.get('jwtPrivateKey')){
    console.log(config.get('jwtPrivateKey'));
    console.error('FATAL ERROR: secretKey not set');
    process.exit(1);
}

//Connection for mongoose
mongoose.connect('mongodb://localhost/cybergroup').then(() => console.log('MongoDb connected')).catch(err => console.error('Error occured while connecting to db', err));


//Middleware for parsing json in req.body
app.use(express.json());
app.use(express.static('public'));

app.use(logger);
app.use(authenticator);

app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

//Port will be dynamically assigned by hosting environment
//Environment variable is a variable that is a part of environment in which process runs
const port = process.env.PORT || 3000; 
app.listen(3000, () => console.log(`Listening at ${port} port`));

// createEmployee();