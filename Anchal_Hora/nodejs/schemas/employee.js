module.exports = {
  Name: {
    type: String,
    default: null
  },
  password: {
    type:String,
    default: null
  },
  phoneNo: {
    type: String,
    default: null
  },
  address: {
      city:{ type: String,
    default: null},
    state:
    { type: String,
        default: null}
  },
  Designation: {
    type: String,
    default: null
  },
  Emailid: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  technologies: [{ type: String }]
};
