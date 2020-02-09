const controller=require('../controllers');
module.exports=(app) => {
   
       
         app.get("/employees",controller.employees.index);
         app.get("/employees/:id",controller.employees.index);
         app.post("/employees",controller.employees.create);
         app.put("/employees/:id",controller.employees.update);
         app.delete("/employees/:id",controller.employees.delete);

        
        
        app.post("/bootcamp",(req,res) => {
        console.log(req.body);
        res.send({session:`Bootcamp session: ${req.body.year}`});
        });
        app.post("/info",(req,res) =>{
        console.log(req.body);
        res.send({name:`${req.body.name}`,course:`${req.body.course}`,Email:`${req.body.email}`});
        });
};