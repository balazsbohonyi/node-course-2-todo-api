const {MongoClient, ObjectID} = require('mongodb');

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

  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bf7d1375568482891ac6378')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Balazs'}).toArray().then( (docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // closing the DB connection
  // client.close();
});
