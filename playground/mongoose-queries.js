var ObjectID = require('mongodb').ObjectID;

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// got this ID from the Mongo database (using Robo 3T)
var id ="5c2e0556b55a4833ccf6c5f5";

// TODO: for some reason this is not working as expected
// if(!ObjectID.isValid(id)) {
//   console.log('Todo ID not valid!');
// }

// // find
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // findOne
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// findById
Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Todo not found!');
  }

  console.log('Todo By Id', todo);
});
