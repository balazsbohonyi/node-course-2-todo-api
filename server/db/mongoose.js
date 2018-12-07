var mongoose = require('mongoose');

// telling Mongoose to use the built in Promise library
mongoose.Promise = global.Promise;

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
};
