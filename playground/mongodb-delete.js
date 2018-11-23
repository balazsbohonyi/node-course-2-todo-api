const {MongoClient, ObjectID} = require('mongodb');

// TodoApp in the URL below it's the DB name
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }

  console.log('Connected to the MongoDB server...')

  const db = client.db('TodoApp');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Balazs'});

  db.collection('Users')
    .findOneAndDelete({_id: new ObjectID('5bf7ce6b6c2b311a0cffc4aa')})
    .then( (results) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

  // closing the DB connection
  // client.close();
});
