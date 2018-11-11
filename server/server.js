let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {toDo} = require('./models/toDos');
let {user} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/toDos', (req, res) => {

    toDo = new toDo({
        text: req.body.text
    });

    toDo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
})



