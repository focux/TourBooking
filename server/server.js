try {
  require('./config/config');
} catch (e) {

}
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const authRoutes = require('./routes/auth');
const tourRoutes = require('./routes/tour');
const bookingRoutes = require('./routes/booking');
const paymentRoutes = require('./routes/payment');
const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');
const emailRoutes = require('./routes/email');
const passportSetup = require('./config/passport-setup');
const { mongoose } = require('./db/mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cors = require('cors');
const enforce = require('express-sslify');

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.SESSION_COOKIE_KEY],
  secure: true
}));
app.use(cors());

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(publicPath));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/booking', bookingRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/send', emailRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server up and running in port', PORT);
});
