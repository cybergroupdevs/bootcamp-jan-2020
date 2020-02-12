const model =require('../models')
class Employee{
    constructor(){
    }
        async create(req,res) {
            let employeeObj ={
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                designation: req.body.designation,
                technologies :req.body.technologies,
                phoneNo: req.body.phoneNo,
                address:{ 
                    city: req.body.address.city,
                    state: req.body.address.state,
                    country: req.body.address.country,
                    pin: req.body.address.pin
                }

            }
            console.log(employeeObj)
            const employee= await model.employee.save(employeeObj)
            res.send(employee)
        }
        async update(req,res) {
            let updateObj={
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                designation: req.body.designation,
                technologies :req.body.technologies,
                phoneNo: req.body.phoneNo,
                address:{ 
                    city: req.body.address.city,
                    state: req.body.address.state,
                    country: req.body.address.country,
                    pin: req.body.address.pin
                }
            }
            console.log(updateObj)
            const employee= await model.employee.update(updateObj)
            res.send(employee)

        }
        async delete(req,res){
            console.log(req.params._id)
            const employee =await model.employee.delete({_id: req.params.parameter})
            res.send("deleted")
        }
        async show(req,res){
            const employee = await model.employee.get({_id: req.params.parameter})
            res.send(employee)


        }
        async index(req,res){
            const employeeList = await model.employee.get();
            res.send(employeeList)
        }
        // async get(criteria ={}){
        //     const employee = model.employee.find()
        //     res.send(employee)
        // }
    }
    module.exports =new Employee();
