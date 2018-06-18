const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid e-mail'
    }
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = { Contact };
