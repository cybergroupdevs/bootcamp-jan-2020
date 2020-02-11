const controller = require("../controllers");
module.exports = ((app) => {
    app.get("/employees", controller.emp.index);
    app.get("/employee/:id", controller.emp.show);
    app.post("/saveEmployee", controller.emp.create);
    app.put("/updateEmployee/:id", controller.emp.update);
    app.post("/login", controller.emp.match);
});