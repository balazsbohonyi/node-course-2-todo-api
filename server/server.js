var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// setting up Express and API routes
var app = express();
const port = process.env.PORT || 3000;
// process.env.PORT needed for Heroku

// configure the middleware
app.use(bodyParser.json());

// ------------ POST /todos route - inserting a new Todo ------------
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

// ------------ GET /todos route - get all the Todos ------------
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

// ------------ GET /todos/:ID route - get an individual Todo ------------
app.get('/todos/:id', (req, res) => {
  // this is the Todo id
  var id = req.params.id;

  // send a 404 status if object ID is not valid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // find the Todo
  Todo.findById(id).then((todo) => {
    // Todo not found - send a 404 back
    if(!todo) {
      return res.status(404).send();
    }

    // Todo found - send back the Todo
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

// ------------ DELETE /todos/:ID route - delete an individual Todo ------------
app.delete('/todos/:id', (req, res) => {
  // get the id of the todo
  var id = req.params.id;

  // send a 404 status if object id is not valid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // remove the todo
  Todo.findByIdAndRemove(id).then((todo) => {
      // todo not found - send back a 404
      if (!todo) {
        return res.status(404).send();
      }

      // todo found, send back the removed todo object
      res.send({todo});
  }).catch((e) => {
    // error - something went wrong
    res.status(400).send();
  });
});


// starting the server
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

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
