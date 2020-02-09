const controller = require('../controllers');
module.exports=(app) =>
{ 
    app.get("/employee", controller.employee.index)
    app.delete("/employee/:parameter",controller.employee.delete)
    app.get("/employee/:parameter",controller.employee.show)
    app.put("/employee/:parameter",controller.employee.updateOne)
    app.post("/employee/register",controller.employee.create)
    app.post("/employee/login",controller.employee.login)    
}