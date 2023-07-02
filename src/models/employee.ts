import { Schema, model, models } from 'mongoose';

const EmployeeSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please fill a valid email address'
    ]
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    select: false
  },
  dni: {
    type: String,
    required: [true, 'DNI is required']
  },
  userType: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  }
});

const employeeModel = models.employee || model('employee', EmployeeSchema);

export default employeeModel;
