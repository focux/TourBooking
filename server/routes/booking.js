const router = require('express').Router();
const { authCheck } = require('../middlewares');
const { Booking } = require('../models/booking');

router.post('/', authCheck, async (req, res) => {
  const {
    tourId,
    childs,
    adults
  } = req.body;
  console.log('EL BODY', req.body);
  const newBooking = new Booking({
    tourId,
    adults,
    childs,
    userId: req.user._id
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

module.exports = router;
