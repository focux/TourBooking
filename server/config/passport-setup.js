const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const { google, facebook } = require('./keys');
const { User } = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await User.findById(id);
  if (currentUser) {
    done(null, currentUser);
  }
});

// Google Strategy
passport.use(new GoogleStrategy({
  callbackURL: '/auth/google/redirect',
  clientID: google.clientID,
  clientSecret: google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
  const {
    name,
    photos,
    emails,
    id
  } = profile;
  const currentUser = await User.findOne({
    socialLogin: {
      googleId: id
    }
  });
  if (currentUser) {
    done(null, currentUser);
  } else {
    const user = new User({
      firstName: name.givenName,
      lastName: name.familyName,
      photo: photos[0].value,
      email: emails[0].value,
      socialLogin: {
        googleId: id
      }
    });
    const newUser = await user.save();
    done(null, newUser);
  }
}));

// Facebook Strategy

passport.use(new FacebookStrategy({
  callbackURL: '/auth/facebook/redirect',
  clientID: facebook.clientID,
  clientSecret: facebook.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
  const {
    id,
    name,
    displayName,
    email
  } = profile;
  console.log(profile)
  const currentUser = await User.findOne({
    socialLogin: {
      facebookId: id
    }
  });
  if (currentUser) {
    done(null, currentUser);
  } else {
    if (email) {
      const newUser = new User({
        firstName: name.givenName || displayName,
        lastName: name.familyName,
        email
      });
      const response = await newUser.save();
      done(null, response);
    }
    console.log('no tengo el email conon');
  }
}));
