const router = require('express').Router();
const { authCheck } = require('../middlewares');
const { Payment } = require('../models/payment');

router.post('/', authCheck, async (req, res) => {
  const {
    paymentId,
    payerId,
    amount
  } = req.body;

  const newPayment = new Payment({
    user: req.user._id,
    paymentId,
    payerId,
    amount
  });

  try {
    const doc = await newPayment.save();
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).send({
      data: { error: e }
    });
  }
});

module.exports = router;
