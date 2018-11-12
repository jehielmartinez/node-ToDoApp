let express = require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {toDo} = require('./models/toDos');
let {user} = require('./models/user');

let app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

//Post toDo EndPoint
app.post('/toDos', (req, res) => {

    let newToDo = new toDo({
        text: req.body.text
    });

    newToDo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

//Get all Todos
app.get('/toDos', (req,res)=>{
    toDo.find().then((toDos)=>{
        res.send({toDos})
    },(e)=>{
        res.status(400).send(err);
    });
});

//GET individual ToDo
app.get('/toDos/:id', (req, res)=>{
    let id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
        toDo.findById(id).then((toDo)=>{
            if(toDo){
                res.send({toDo});
            } else {
                res.status(404).send();
            }
        }).catch((e)=>{
            res.status(400).send(e);
        });
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};



