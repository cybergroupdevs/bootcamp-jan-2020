const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/EmpDB";

mongoose.Promise = global.Promise;

//connecting to db
mongoose
  .connect(url, { useNewUrlParser: true, keepAlive: 1 })
  .then(res => {
    console.log("connection established!");
  })
  .catch(error => {
    console.log(error.message);
  });
module.exports = mongoose;
