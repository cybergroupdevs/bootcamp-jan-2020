const express = require('express');
const bodyParser = require('body-parser');
var config = require('./databse/config');
const app = express();

app.use(bodyParser.json());

require("./routes/route.js")(app);

app.listen('8080', () => {
    console.log("-----------------Listening on port 8080-----------------");
});
