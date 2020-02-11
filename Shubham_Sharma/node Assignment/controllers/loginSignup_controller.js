const model = require("../models");
const jwtHandler = require("../jwtHandler");
class employee{
    constructor(){

    }

    //Are these req, res objects coming here automatically or de we have to set them manually
    async create(req, res){
        console.log(req.body);
        const employee = await model.empModel.save(req.body);
        console.log(employee);
        res.send(employee);
    }

    async match(req, res){
        const allEmp = await model.empModel.get({$and : [{"Username": req.body.Username},{"EmpPassword": req.body.EmpPassword}]
                                                }, 
                                                {"Username": 1,
                                                "EmpName": 1,
                                                "EmpPhone": 1,
                                                "EmpRole": 1,
                                                "_id": 0}
                                                );
        console.log(allEmp);
        if(allEmp != null){
            const token = jwtHandler.tokenGenerator(allEmp);
            res.status('200').send(token);
        }
        else{
            res.status('401').send(allEmp);
        }
    }

    async update(req, res){
        try{
            let employeeUpdatedObj = {
                name: req.body.name, 
                email: req.body.email,
                phone: req.body.phone,
                address: {
                    city: req.body.address.city,
                    state: req.body.address.state,
                    country: req.body.address.country,
                    pincode: req.body.address.pincode
                },
                designation: req.body.designation,
                age: req.body.age,
                technologies: req.body.technologies
            };
            const updatedEmployee = await model.employee.update({"_id": req.params.id}, employeeUpdatedObj);
            console.log("UPDATED");
            res.send("UPDATED");
        }
        catch(e){
            console.log(e);
        }
        
    }

    async delete(req, res){

    }

    async show(req, res){
        const allEmp = await model.employee.get({"_id": req.params.id});
        res.send(allEmp);
    }

    async index(req, res){
        const employee = await model.employee.get({});
        console.log(employee);
        res.send(employee);
    }
}
module.exports = new employee();