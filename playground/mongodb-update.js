const {MongoClient, ObjectID} = require('mongodb');

// TodoApp in the URL below it's the DB name
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }

  console.log('Connected to the MongoDB server...')

  const db = client.db('TodoApp');

//   db.collection('Todos').findOneAndUpdate(
//     {_id: new ObjectID('5bf7d1375568482891ac6378')}, {
//       // update operator. Google this: MongoDB update operators
//       $set: {
//         completed: true
//       }
//     }, {
//       // we set this option - otherwise the original object is returned, not the updated one
//       returnOriginal: false
//     }).then( (result) => {
//       console.log(result);
//     });
//
//   // closing the DB connection
//   // client.close();
// });

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5bf7ce52d3a3062424193092')},
    {
      $set: { name: 'Balazs' },
      $inc: { age: 4 }
    },
    {
      returnOriginal: false
    }
  ).then( (result) => {
    console.log(result);
  });

  // closing the DB connection
  // client.close();
});
