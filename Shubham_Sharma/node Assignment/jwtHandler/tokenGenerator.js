const jwt = require("jsonwebtoken");
const fs   = require('fs');

module.exports = (payload) => {
    // PRIVATE and PUBLIC key
    var privateKEY  = fs.readFileSync('./private.key', 'utf8');

    var i  = 'CyberGroup India Pvt. Ltd.';          // Issuer 
    var s  = 'User Auth';                           // Subject 
    var a  = 'someone@cygrp.com';                   // Audience

    // SIGNING OPTIONS
    var signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
    };
   
    var token = jwt.sign(payload, privateKEY, signOptions);
    console.log("Token - " + token)
    return token;
}   
   