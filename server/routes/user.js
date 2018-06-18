const router = require('express').Router();
const { User } = require('../models/user');

router.patch('/', async (req, res) => {
  const newObject = req.body;
  try {
    const response = await User.findByIdAndUpdate(req.user._id, { $set: newObject }, { new: true });
    res.status(200).send({ data: response });
  } catch (e) {
    res.status(400).send({
      data: {
        error: e
      }
    });
  }
});

module.exports = router;
