var {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // remove all the documents
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// // remove a certain document
// Todo.findOneAndRemove({_id: "5c3096f02364f85d8f87b865"}).then((todo) => {
//   console.log(todo);
// });

// remove a certain document by id
Todo.findByIdAndRemove('5c3096f02364f85d8f87b865').then((todo) => {
  console.log(todo);
});
