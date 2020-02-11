module.exports=(app)=>{
const employee={

name:{
  type:String,
  default:null
},
email:{
  type:String,
  required:true
},
password:{
  type:String,
  required:true
},

phoneNo:{
  type:String,
  default:null
},
address:{
      city:{
        type:String,
        default:null
      },
      state:{
        type:String,
        default:null
      },
      pincode:{
        type:string,
        default:null
      }
},
designation:{
    type:string,
    default:'consultant 1',
    enum:['consultant 1 ','consultant 2','associate 1','associate 2']
},
age:{
     type:Number,
     default:null
},
technologies:[{type:String}]

}

}
