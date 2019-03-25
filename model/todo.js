var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
name: {
  type: String,
  required: "name can't be blank"
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;