const controller = require("../controllers");
module.exports = ((app) => {
    app.get("/getAllEmployees", controller.emp.index);
    app.get("/employees/:id", controller.emp.show);
    app.post("/saveEmployee", controller.emp.create);
    app.put("/updateEmployee/:id", controller.emp.update);
    app.post("/login", controller.emp.match);
});