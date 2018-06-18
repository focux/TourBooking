const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    cellphone: {
      type: String,
      trim: true,
      minlength: 10
    },
    photo: String,
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid e-mail'
      }
    },
    password: {
      type: Number,
      minlength: 6
    },
    socialLogin: {
      googleId: String,
      facebookId: String
    },
    whatsapp: Boolean,
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }],
    bookedTours: [{ type: mongoose.Schema.Types.ObjectId }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
