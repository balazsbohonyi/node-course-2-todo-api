var mongoose = require('mongoose');

// telling Mongoose to use the built in Promise library
mongoose.Promise = global.Promise;

// connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// process.env.MONGODB_URI it's the MongoDB url on Heroku

module.exports = {
  mongoose: mongoose
};
