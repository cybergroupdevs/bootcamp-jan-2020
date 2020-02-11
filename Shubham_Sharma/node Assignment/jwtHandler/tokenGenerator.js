const jwt = require("jsonwebtoken");
const fs   = require('fs');
const path = require('path');

module.exports = (payload) => {
    // PRIVATE and PUBLIC key
    var privateKEY  = fs.readFileSync(path.resolve("./jwtHandler/private.key"), 'utf8');
    //const privateKEY = "thisisshubhamsharma";
    var i  = 'CyberGroup India Pvt. Ltd.';          // Issuer 
    var s  = 'User Auth';                           // Subject 
    var a  = 'someone@cygrp.com';                   // Audience
     
    const actualPayload = JSON.stringify(payload[0]);
    console.log(actualPayload);
    // SIGNING OPTIONS
    var signOptions = JSON.stringify({
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
    });
    console.log(signOptions);

    try{
        var token = jwt.sign(actualPayload, privateKEY, signOptions);
        console.log("Token - " + token)
        return token;
    }
    catch(e){
        console.log(e);
        return null;
    }
    
}   