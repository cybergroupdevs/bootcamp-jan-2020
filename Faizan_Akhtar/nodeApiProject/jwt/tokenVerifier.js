const jwt = require("jsonwebtoken");
const fileSync = require("fs");

module.exports = (token) => {
    var issuer  = 'Faizan.Akhtar';          
    var subject  = 'NodeAPI';                           
    var audience  = 'mentor@cygrp.com';                   
    var verifyOptions = {
        issuer:  issuer,
        subject:  subject,
        audience:  audience,
        expiresIn:  "12h",
        algorithm:  ["HS256"]
    };
    const publicKey = fileSync.readFileSync('./public.key.txt', 'utf8');
    var verified = jwt.verify(token, publicKey, verifyOptions);
    console.log("\nJWT verification result: " + JSON.stringify(verified));
}