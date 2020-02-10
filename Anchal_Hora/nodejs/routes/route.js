const controller = require("../controllers");
module.exports = app => {
  app.post("/employees/:Register", controller.employees.create);
  app.get("/employees", controller.employees.index);//get without id
  app.get("/employees", controller.employees.show);//get with id
  app.delete("/employees/:id", controller.employees.delete);
  app.put("/employees/:id", controller.employees.update);

  // app.get("/", (req, res) => {
  // console.log("Hello, This is node");
  // res.send({ text: "Welcome to node.js" });
};
