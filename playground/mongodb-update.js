const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect", err);
    }
    console.log("Connected to MongoDB server");

    db.collection("ToDos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5be848d8161e335ffc27e210")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
      
    // db.close();
  }
);
