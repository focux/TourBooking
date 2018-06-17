const router = require('express').Router();
const passport = require('passport');
const errorCodes = require('../config/errorCodes');
const _ = require('lodash');

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({
      errorCode: errorCodes.NOTAUTHENTICATED.code,
      errorMessage: errorCodes.NOTAUTHENTICATED.message
    });
  } else {
    next();
  }
};

const checkReturnTo = (req, res, next) => {
  const { returnTo } = req.query;
  if (returnTo) {
    req.session.returnTo = (returnTo.indexOf('/') === -1) ? `/${returnTo}` : returnTo;
  }
  next();
};

// Google Auth
router.get('/google', checkReturnTo, passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google', {
  successReturnToOrRedirect: '/'
}), (req, res) => {

});

// Facebook Auth
router.get('/facebook', checkReturnTo, passport.authenticate('facebook', {
  scope: ['user_birthday', 'email', 'public_profile']
}));

router.get('/facebook/redirect', passport.authenticate('facebook', {
  successReturnToOrRedirect: '/'
}), (req, res) => {

});

// Methods for all
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/check', authCheck, (req, res) => {
  const user = _.pick(req.user, [
    'firstName',
    'lastName',
    'email',
    'photo',
    '_id',
    'cellphone',
    'whatsapp'
  ]);
  res.status(200).send({ user });
});

module.exports = router;
