const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat dinner'})
  // .then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  //  db.collection('Todos').deleteOne({text: 'Eat dinner'})
  // .then((result) => {
  //   console.log(result);
  // });
  //findOne&Delete
  //deletes and returns the object deleted
  db.collection('Todos').findOneAndDelete({completed: false})
  .then((result) => {
    console.log(result);
  });




  db.close();
});


