const router = require('express').Router();
const passport = require('passport');

// Google Auth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  console.log('Tamo en ruta');
  res.send('klk');
});

// Facebook Auth
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['user_birthday', 'email', 'public_profile']
}));

router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
  res.send('Facebook login lomopa');
});

// Methods for all
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send({
    status: 200
  });
});

module.exports = router;
