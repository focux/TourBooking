const router = require('express').Router();
const { authCheck } = require('../middlewares');
const { Booking } = require('../models/booking');

router.post('/', authCheck, async (req, res) => {
  const {
    tour,
    childs,
    adults,
    payment
  } = req.body;
  console.log('EL BODY', req.body);
  const newBooking = new Booking({
    tour,
    adults,
    childs,
    payment,
    user: req.user._id
  });

  try {
    const doc = await newBooking.save();
    res.status(200).send({ data: doc });
  } catch (e) {
    console.log('ERROR', e);
    res.status(400).send({
      data: { error: e }
    });
  }
});

router.get('/', async (req, res) => {
  const _id = '5b21fc97c5c50614d647938b';
  // const { _id } = req.user;
  try {
    const data = await Booking.find({
      user: _id
    }).populate('tour')
      .populate('payment');
    res.status(200).send({ data });
  } catch (e) {
    res.status(400).send({
      data: {
        error: 'Bad request'
      }
    });
  }
});

router.patch('/', async (req, res) => {
  const { bookingId, paymentId } = req.body;
  console.log(bookingId, 'BOOOKING ID');
  console.log(paymentId, 'PAYMENT ID');
  try {
    const bookingResponse = await Booking.findById(bookingId);
    console.log('klk')
    if (!bookingResponse) {
      throw new Error();
    }
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { $set: { payment: [...bookingResponse.payment, paymentId] } }, { new: true });
    res.status(200).send({ data: updatedBooking });
  } catch (e) {
    res.status(400).send({ error: 'Bad request' });
  }
});

module.exports = router;
