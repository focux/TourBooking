const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
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
  callbackURL: `${process.env.ROOT_DOMAIN}/api/v1/auth/google/redirect`,
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
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
    try {
      const newUser = await user.save();
      done(null, newUser);
    } catch (e) {
      done(null, false);
    }
  }
}));

// Facebook Strategy

passport.use(new FacebookStrategy({
  callbackURL: `${process.env.ROOT_DOMAIN}/api/v1/auth/facebook/redirect`,
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link', 'picture', 'location']
}, async (accessToken, refreshToken, profile, done) => {
  const {
    id,
    name,
    displayName,
    emails,
    photos
  } = profile;
  console.log(profile);
  const currentUser = await User.findOne({
    socialLogin: {
      facebookId: id
    }
  });
  if (currentUser) {
    done(null, currentUser);
  } else {
    if (emails[0].value) {
      try {
      const newUser = new User({
        firstName: name.givenName || displayName,
        lastName: name.familyName,
        email: emails[0].value,
        photo: photos[0].value,
        socialLogin: {
          facebookId: id
        }
      });
      const response = await newUser.save();
      done(null, response);
    } catch (e) {
      done(null, false);
    }
    } else {
      done(null, false);
    }
  }
}));
