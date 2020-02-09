module.exports={
    name: {  type:String , default:null },
    email: { type:String , required:true},
    phone: { type:String,default:null },
    address:{
        city: { type:String ,default:null},
        state: { type: String ,default:null},
        pincode: { type:String , default:null }
             },
    designation:{ type: String,default:'CONSULTANT 1',enum:['CONSULTANT 1','CONSULTANT 2','ASSOCIATE 1','INTERN']},
    technologies:[{type:String,default:null}],
    age:{ type:Number, default:null}

}