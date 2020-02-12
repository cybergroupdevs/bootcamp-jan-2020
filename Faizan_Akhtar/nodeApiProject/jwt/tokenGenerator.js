const jwt = require("jsonwebtoken");
const fileSync   = require('fs');
const path = require('path');

module.exports = (payload) => {
    
    var privateKey  = fileSync.readFileSync(path.resolve("./jwt/private.key"), 'utf8');

    var issuer  = 'Faizan.Akhtar'; 
    var subject  = 'NodeAPI';                            
    var audience  = 'mentor@cygrp.com';                   
     
    const Payload = payload[0];

 
    var signature = {
    issuer:  issuer,
    subject:  subject,
    audience:  audience,
    expiresIn:  "12h",
    algorithm:  "HS256"
    };

    try{
        var token = jwt.sign({data: Payload}, privateKey, signature);
        console.log("Token = =  " + token)
        return token;
    }
    catch(e){
        return null;
    }
    
}   