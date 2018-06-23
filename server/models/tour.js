const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    departingDate: {
      type: Number,
      required: true
    },
    departingFrom: {
      type: String,
      required: true
    },
    childsAllowed: {
      type: Boolean,
      required: true
    },
    adultPrice: {
      type: Number,
      required: true
    },
    childPrice: Number,
    bookingDiscount: Number,
    spaces: {
      type: Number,
      required: true
    },
    totalSpace: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    description: {
      aboutPlace: {
        type: String,
        required: true
      },
      includes: [{
        type: String,
        required: true
      }],
      aboutOperator: {
        type: String,
        required: true
      }
    },
    operator: {
      type: String,
      required: true
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
  },
  {
    timestamps: true
  }
);

tourSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

tourSchema.set('toJSON', {
  virtuals: true
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = { Tour };
