const Joi = require("joi");
const mongoose = require("mongoose");

const employeeSchema = mongoose.model(
  "Employee",
  new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: String,
    mobile: String,
    role: {
      type: String,
      enum: ["Employee", "Manager", "Admin"],
      default: "Employee"
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      default: null
    },
    projects: [
      {
        projectName: String
      }
    ]
  })
);

employeeSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
};

function validateEmployee(employee) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    firstName: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(employee, schema);
}

exports.Employee = Employee;
exports.validate = validateEmployee;
