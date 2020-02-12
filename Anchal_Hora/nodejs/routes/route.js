const controller = require("../controllers");
module.exports = app => {
  app.post("/employees/register", controller.employees.create);
  app.post("/employees/login", controller.employees.login);
  app.post("/employees", controller.employees.add);
  app.get("/employees", controller.employees.index);//get without id
  app.get("/employees/:id", controller.employees.show);//get with id
  app.delete("/employees/:id", controller.employees.delete);
  app.put("/employees/:id", controller.employees.update);

  // app.get("/", (req, res) => {
  // console.log("Hello, This is node");
  // res.send({ text: "Welcome to node.js" });
};
