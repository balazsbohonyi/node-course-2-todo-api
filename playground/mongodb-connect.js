// const MongoClient = require('mongodb').MongoClient;

// uses ES6 destructuring to create the MongoClient variable (the result it's the same as the line above)
const {MongoClient, ObjectID} = require('mongodb');

// // this would create new IDs - the same way as MongoDB auto-creates the documetn IDs
// var obj = new ObjectID();
// console.log(obj);

// // ES6 destructuring
// // - it's a fantastic way to make new variables from an object's properties
// var user = { name: 'Andrew', age: 25 };
// var {name} = user;
// console.log(name);

// TodoApp in the URL below it's the DB name
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }

  console.log('Connected to the MongoDB server...')

  const db = client.db('TodoApp');

  /******* Inserting a new 'todo' document ********/
  // db.collection('Todos').insertOne({
  //   text:       'Something to do',
  //   completed:  false
  // }, (err, result) => {
  //   if (err) {
  //     return console('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  /******* Inserting a new 'user' document ********/
  // db.collection('Users').insertOne({
  //   name:     'Sarah',
  //   age:      36,
  //   location: 'Carei, Romania'
  // }, (err, result) => {
  //   if (err) {
  //     return console('Unable to insert user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //   // object ID
  //   console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
  //
  //   // retrieving the timestamp from the object ID
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // closing the DB connection
  client.close();
});
