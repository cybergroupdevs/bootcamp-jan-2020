const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/EmployeeDB";

mongoose.Promise = global.Promise;
mongoose
  .connect(url, { useNewUrlParser: true, keepAlive: 1 })
  .then(res => {
    console.log("Connection Established");
    console.log(res);
  })
  .catch(error => {
    console.log(error.message);
  });

module.exports = mongoose;
