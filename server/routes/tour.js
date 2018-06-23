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

router.patch('/:id', async (req, res) => {
  const { spaces } = req.body;
  console.log('EL BODU', req.body);
  console.log('eL ID', req.params.id);
  try {
    const response = await Tour.findByIdAndUpdate(req.params.id, { $inc: { spaces: -spaces } }, { new: true });
    res.status(200).send({ data: response });
  } catch (e) {
    res.status(400).send({
      data: {
        error: 'Bad request'
      }
    });
  }
});

module.exports = router;
