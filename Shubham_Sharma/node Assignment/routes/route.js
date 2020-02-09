const controller = require("../controllers");
module.exports = (app => {
    app.get("/getAllEmployees", controller.employees.index);
    app.get("/employees/:id", controller.employees.show);
    app.post("/saveEmployee", controller.employees.create);
    app.put("/updateEmployee/:id", controller.employees.update);
});