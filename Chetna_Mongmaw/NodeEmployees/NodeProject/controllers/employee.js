const model =require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


class Employee{
    constructor(){
    }
        async create(req,res) {
            let employeeObj ={
                r_id:req.body.r_id,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                p_id: req.body.p_id,
                role: req.body.role             
            }
            console.log(employeeObj)
            const employee= await model.employee.save(employeeObj)
            res.send(employee)
        }

        async updateOne(req,res) {
            const employee= await model.employee.updateOne({r_id: req.params.parameter},
              { $set:{r_id: req.body.r_id,
                      name: req.body.name,
                      username: req.body.username,
                      email: req.body.email,
                      password: req.body.password,
                      p_id: req.body.project_id,
                      role: req.body.role}})
            res.send(employee)

        }
        async delete(req,res){
            console.log(req.params._id)
            const employee =await model.employee.delete({r_id: req.params.parameter})
            res.send("deleted")
        }
        async show(req,res){
            const employee = await model.employee.get({r_id: req.params.parameter})
            res.send(employee)
        }
        async index(req,res){
            const employeeList = await model.employee.get();
            res.send(employeeList)
        }
        async login(req,res){
            let loginObj={
                username: "nangchetnamaw",
                password: "chetnamaw",
                role: "role"
            }
            
            // model.employee.find({username:req.body.username, password:req.body.password, role:req.body.role}
            //     ,function(err,token){
            //     if(err){
            //        console.log= "error"
            //    }
            //    else{
            //     const token=jwt.sign({user: {username: req.body.username, role: req.body.role}},'secretkey',{ expiresIn: '1h' });
            //     res.json({
            //             token:token
            //         });
            //    } });
            jwt.sign({user: {username: loginObj.username, role: loginObj.role}},'secretkey',{ expiresIn: '1h' },(err,token)=>{
                res.json({
                    token:token
                });
            });

        }
        
        
        
    }
    module.exports =new Employee();
