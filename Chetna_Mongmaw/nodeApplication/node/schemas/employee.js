const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
module.exports= {
    r_id:{
        type:Number
    },
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    p_id:{
        type: Number
    },
    role:{
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}
