module.exports = {
  name: {
    type: String,
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
  designation: {
    type: String,
    default: null
  },
  emailid: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  technologies: [{ type: String }]
};
