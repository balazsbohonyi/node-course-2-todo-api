var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// setting up Express and API routes
var app = express();

// configure the middleware
app.use(bodyParser.json());

// route for inserting a new Todo
app.post('/todos', (req, res) => {
  // console.log(req.body);

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000')
});

// // create a new Todo object
// var newTodo = new Todo({
//   text: 'Something to do'
// });
//
// // saving the new Todo object
// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// // create a User model
// var user = new User({
//   email: 'balazs.bohonyi@gmail.com  '
// });
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save User', e);
// })
