var mongoose= require('mongoose');
process.env.dbURL
mongoose.connect(process.env.todoDB, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
mongoose.Promise = Promise;   

module.exports.Todo = require('./todo');