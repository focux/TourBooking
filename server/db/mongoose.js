const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/Driscovery';
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl);

module.exports = { mongoose };
