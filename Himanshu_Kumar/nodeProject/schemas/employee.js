

module.exports={
    name:{
        type:String,
        default:null
    },
    email:{
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
        country:{
            type:String,
            default:null
        },
        pinCode:{
            type:String,
            default:null
        },
    },
    designation:{
        type:String,
        default:'Consultant 1',
        enum:['Consultant 1','Consultant 2','Consultant 3','Consultant 4']
    },
    age:{
        type:Number,
        default:null
    },
    technologies:[{type:String}]
}