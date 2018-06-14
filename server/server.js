const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport-setup');
const {mongoose} = require('./db/mongoose');
const cookieSession = require('cookie-session');
const { session } = require('./config/keys');
const passport = require('passport');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(publicPath));

app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server up and running in port', PORT);
});
