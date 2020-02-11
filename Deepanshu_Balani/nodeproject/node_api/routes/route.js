const controller=require('../controllers')
module.exports=(app)=>{

app.get("/employees",controller.employees.index);
app.post("/employees",controller.employees.create);
app.get("/employees/:id",controller.employees.show);
app.put("/employees/:id",controller.employees.update);
app.delete("/employees/:id",controller.employees.delete);

}