----------------------------------------
Starting and connecting to MongoDB
----------------------------------------

cd C:\Program Files\MongoDB\Server\4.0\bin
mongod.exe --dbpath d:/mongo-data

C:\Program Files\MongoDB\Server\4.0\bin
mongo

> db.Todos.insert({text: 'Create new Node course'})
> db.Todos.find()

Donwload and install https://robomongo.org/ (like PHPMyAdmin / MySQL Workbench)

----------------------------------------
MongoDB Vocabulary
----------------------------------------

SQL:      Table
NoSQL:    Collection

SQL:      Row / Record
NoSQL:    Document

SQL:      Column
NoSQL:    Field / Property


--------------------------------
Node MongoDB Native Package
--------------------------------

https://github.com/mongodb/node-mongodb-native
Installation: npm install mongodb --save


--------------------------------
More about MongoDB id
--------------------------------

- it's a 12 byte value
- first 4 bytes is a timestamp (it means in our documents we don't need to have a 'created_at' field)
- next 3 bytes is a machine identifier
- next 2 bytes a process id
- next 3 bytes a counter (this is similar to what MySQL would do with an autocomplete field)


--------------------------------
ES6 destructuring
--------------------------------

// ES6 destructuring
// - it's a fantastic way to make new variables from an object's properties
var user = { name: 'Andrew', age: 25 };
var {name} = user;
console.log(name);


--------------------------------
Running tests
--------------------------------

npm run test - this one is running via nodemon
npm run test-watch - this one is running via nodemon

--------------------------------
Mongoose ORM
--------------------------------
https://mongoosejs.com/


--------------------------------
Postman
--------------------------------
https://www.getpostman.com/
It's an essential tool if you're building an API.
Postman lets you create HTTP requests and fire them off - makes it easy to test that everything you're writing it's working as expected.

Download the Postman app and install it to use Postman.

--------------------------------
Body Parser Package
--------------------------------
https://www.npmjs.com/package/body-parser

Node.js body parsing middleware
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

--------------------------------
HTTP status codes
--------------------------------
https://httpstatuses.com/
Get a list of all available HTTP status codes
