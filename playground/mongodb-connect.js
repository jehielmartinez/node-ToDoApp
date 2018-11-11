// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('ToDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if (err){
    //         return console.log('Unable to insert To Do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('users').insertOne({
    //     name: 'Jehiel Martinez',
    //     age: 26,
    //     location: 'Choloma, Cortes'
    // }, (err, result)=>{
    //     if (err){
    //         return console.log('Unable to insert To Do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    db.close();
});