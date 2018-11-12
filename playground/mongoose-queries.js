const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {toDo} = require('./../server/models/toDos');

let id = '5be8d37f4a818f941299d1b61';

// if (!ObjectID.isValid(id)){
//     console.log('ID not Valid!');
// }

// toDo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// toDo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

toDo.findById(id).then((toDo)=>{
    if (!toDo){
        return console.log('Id not Found!')
    }
    console.log('ToDo by ID: ', toDo);
}).catch((e) => console.log(e));