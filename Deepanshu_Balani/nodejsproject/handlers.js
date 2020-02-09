const model=require('./models');
const jwt=require('jsonwebtoken');
const jwtKey="my_secret_key";
const jwtExpirySeconds=300

const users={
    user1='password1',
    user2='password2'
}
const signIn =(req,res)=>{
   //Get credentials from json body
   const{email,password}=req.body
   if(!email||!password||users[email]!==password){
   //return 401 error is email or password doesn't exist or if
   //password does not match with our records
   return res.status(401).end()
   }
   //create a new token with email in the payload 
   //and which expires 300 seconds after issue
   const token=jwt.sign({email},jwtKey,{
       algorithm:'HS256',
       expireIn:jwtExpirySeconds
   })
    console.log('token:',token)
    //set the cookie as the token string ,with the similar max Age as the token
    //here the max age is in milliseconds ,so we multiply by 1000 
   
    res.cookie('token',token,{maxAge:jwtExpirySeconds*1000});
    res.end();
     //if a user logs in with correct
 res.send(token);

}
