module.exports = {
	name:{
		type: String,
		default: null
	},
	phoneNo:{
		type:String
	},
	email:{
		type: String,
		required: true
	},
	designation:{
		type: String,
		default: 'consultant 1',
		//enum:['consultant 1','consultant 2','associate 1','associate 2']
	},
	password:{
		type: String,
		default: null
	}
	/*address:{
		city:{
		type:String
	},
	state:{
		type:String,
		default: null
	},
	country:{
		type: String,
		default: null
	},
	pincode:{
		type: String,
		default: null
	}
	},
	designation:{
		type: String,
		default: 'consultant 1',
		//enum:['consultant 1','consultant 2','associate 1','associate 2']
	},
	/*age:{
		type: Number,
		default: null
	},
	technologies:[{type: String}]*/
}