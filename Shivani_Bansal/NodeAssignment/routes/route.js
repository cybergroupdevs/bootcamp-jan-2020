const controller = require('../controllers');
module.exports=(app) =>
{ 
    app.get("/employee", controller.employee.index)
    app.delete("/employee/:parameter",controller.employee.delete)
    app.get("/employee/:parameter",controller.employee.show)
    app.put("/employee",controller.employee.update)
    app.post("/employee",controller.employee.create)

}

