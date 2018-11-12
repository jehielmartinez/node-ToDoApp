let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {toDo} = require('./models/toDos');
let {user} = require('./models/user');

let app = express();

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
    })

})


app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};



