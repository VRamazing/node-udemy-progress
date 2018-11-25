const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to unsert todo', err);
  //   }
  //   //result.ops -> stores all docs inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  //Insert new doc into Users
  db.collection('Users').insertOne({
    name: 'Vignesh',
    age: 24,
    location: 'New Delhi'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }
  })



  db.close();
});


