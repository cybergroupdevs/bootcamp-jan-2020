module.exports = {
    name: {
    type: String,
    required: true
    },
    
    email: {
    type: String,
    required: true
    },
  
    password: {
    type: String,
    required: true
    },
  
    gender: {
    type: String,
    required: true
    },
  
    phoneNo: {
    type: Number,
    required: true
    },

    joiningDate: {
    type: Date
    },
    
    role: {
    type: String,
    default: "Employee"
    },
  
    experience: {
    type: Number,
    required: true
    },

    projectManager: {
    type: String,
    default: null
    }
};
