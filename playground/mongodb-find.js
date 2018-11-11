// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('ToDos').find({
    //     _id: new ObjectID('5be843fa161e335ffc27e205')
    // }).toArray().then((docs)=>{
    //     console.log('To Dos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch', err)
    // });

    db.collection('ToDos').find().count().then((count)=>{
        console.log(`To Dos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fetch', err)
    });




    // db.close();
});