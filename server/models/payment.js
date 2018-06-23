const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    paymentId: {
      type: String,
      required: true
    },
    payerId: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment };
