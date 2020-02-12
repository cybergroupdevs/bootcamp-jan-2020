    var verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  ["RS256"]
   };
   var legit = jwt.verify(token, publicKEY, verifyOptions);
   console.log("\nJWT verification result: " + JSON.stringify(legit));