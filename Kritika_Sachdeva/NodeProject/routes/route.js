const controller= require('../controllers');

module.exports=(app)=>{
    app.get("/employee/:id",controller.employee.show)  
    app.post("/employee", controller.employee.create)
    app.put("/employee/:id",controller.employee.update)
    app.delete("/employee/:id",controller.employee.delete)
    app.get("/employee",controller.employee.index)
}