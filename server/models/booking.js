const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: true
    },
    adults: {
      type: Number,
      required: true
    },
    childs: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };
