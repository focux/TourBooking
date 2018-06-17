const router = require('express').Router();
const { Tour } = require('../models/tour');
const { authCheck } = require('../middlewares');

router.get('/', async (req, res) => {
  const tours = await Tour.find({});
  const toursObject = { data: tours };
  res.status(200).send(toursObject);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);
  const tourObject = { data: tour };
  res.status(200).send(tourObject);
});

router.post('/', authCheck, (req, res) => {
  res.status(200).send();
});

module.exports = router;
