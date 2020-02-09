module.exports = {
    Emp_Name: {
        type: String,
        default: null
    },
    Username: {
        type: String,
        default: null
    },
    Emp_Phone: {
        type: String,
        default: null
    },
    Emp_Address: {
        city: {
            type: String,
            default: null
        },
        state: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        },
        pincode: {
            type: String,
            default: null
        }
    },
    Emp_Role: {
        type: String,
        default: "Consultant 1"
    },
    Emp_Password: {
        type: Number,
        default: null
    },
    Emp_ProjectId: {
        type: String,
        default: 'Bench'
    },
    Admin_Flag: {
        type: Boolean,
        default: false
    },
    Emp_Flag: {
        type: Boolean,
        default: false
    }
}