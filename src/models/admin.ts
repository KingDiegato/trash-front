import { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
  usuario: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  nCompleto: {
    type: String,
    required: true
  },
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
  dni: {
    type: String,
    required: [true, 'DNI is required']
  },
  edad: {
    type: Number,
    required: true
  },
  telefono: {
    type: String,
    required: true,
    select: false
  }
});

const adminModel = models.admin || model('admin', AdminSchema);

export default adminModel;
