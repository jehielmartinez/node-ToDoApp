const mongoose = require('mongoose');

//MongoDB with Mongoose config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<todoapp>:<todoapp123>@ds123532.mlab.com:23532/nodejs_todoapp_api');
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}