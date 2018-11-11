const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect', err);
    }
    console.log('Connected to MongoDB server');

    //deleteMany
        // db.collection('ToDos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
        //     console.log(result);
        // });
    //deleteOne
        // db.collection('ToDos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
        //     console.log(result);
        // });
    //findOneAndDelete
        db.collection('ToDos').findOneAndDelete({completed: false}).then((result)=>{
            console.log(result);
        });



    // db.close();
});