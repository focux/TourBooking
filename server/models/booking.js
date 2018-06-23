const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: true
    },
    adults: {
      type: Number,
      required: true
    },
    childs: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    payment: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment',
      required: true
    }]
  },
  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };
