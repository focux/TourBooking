const router = require('express').Router();
const { Contact } = require('../models/contact');

router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    description
  } = req.body;
  const newContactForm = new Contact({
    firstName,
    lastName,
    email,
    description
  });
  try {
    const response = newContactForm.save();
    res.status(200).send({ data: newContactForm });
  } catch (e) {
    res.status(400).send({
      data: {
        error: e
      }
    });
  }
});

module.exports = router;
