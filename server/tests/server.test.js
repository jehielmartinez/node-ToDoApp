const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {toDo} = require('./../models/toDos');

const toDosArray = [
    {
        text: "First Test ToDo"
    },
    {
        text: "Second Test ToDo"
    },
    {
        text: "Third Test ToDo"
    },
];

beforeEach((done) => {
 toDo.remove({}).then(()=>{
     return toDo.insertMany(toDosArray);
 }).then(() => done());
});

describe('POST /toDos', () => {
    //Create a new ToDO
    it('should create a new todo', (done) => {
        let text = 'Test toDo Text';

        request(app)
        .post('/toDos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=>{
            if (err) {
                return done(err);
            }
            toDo.find({text}).then((toDos)=>{
                expect(toDos.length).toBe(1);
                expect(toDos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    //Not create a Todo
    it('should not create a new ToDO', (done)=>{

        request(app)
        .post('/toDos')
        .send({})
        .expect(400) // 500 or 400?
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            toDo.find().then((toDos)=>{
                expect(toDos.length).toBe(3);
                done();
            }).catch((e)=>done(e));
        });
    });

    describe('GET /toDos', ()=>{

        //GET all To Dos
        it ('Should get all the ToDos', (done)=>{
            request(app)
            .get('/toDos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.toDos.length).toBe(3);
            })
            .end(done);
        });

    });

});