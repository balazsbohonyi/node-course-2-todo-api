var mongoose = require('mongoose');

// Todo model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,   // validator
    minlength: 1,     // validator
    trim: true        // removing leading / trailing spaces
  },
  completed: {
    type: Boolean,
    default: false    // sets the default value,
  },
  completedAt: {
    type: Number,     // UNIX timestamp
    default: null
  }
});

module.exports = {Todo};
