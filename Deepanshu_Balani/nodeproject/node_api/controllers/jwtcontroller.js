const fs   = require('fs');
const jwt  = require('jsonwebtoken');
function login(email,password){
var payload = {
    email:email,
    password:password

   }
   // PRIVATE and PUBLIC key
   var privateKEY  = fs.readFileSync('./private.key', 'utf8');
   var publicKEY  = fs.readFileSync('./public.key', 'utf8');
   var i  = 'Mysoft corp';          // Issuer 
   var s  = 'some@user.com';        // Subject 
   var a  = 'http://mysoftcorp.in'; // Audience
   // SIGNING OPTIONS
   var signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
   };
   var token = jwt.sign({data:payload}, privateKEY, signOptions);
console.log("Token - " + token)
return token;
}