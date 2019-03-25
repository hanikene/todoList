var db = require('../model');

exports.getTodos = function(req, res) {
  db.Todo.find()
  .then((todos) => res.json(todos))
  .catch((err) => res.send(err));
}

exports.postTodo = function(req, res) {
  db.Todo.create(req.body)
  .then((newTodo) => res.status(201).json(newTodo))
  .catch((err) => res.send(err));
}

exports.getTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo)=> res.json(foundTodo))
  .catch((err) => res.send(err));
}

exports.putTodo = function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((updatedTodo) => res.json(updatedTodo))
  .catch((err) => res.send(err));
}

exports.deleteTodo = function(req, res) {
  db.Todo.findByIdAndDelete(req.params.todoId)
  .then(() => res.redirect("/api/todos"))
  .catch((err) => res.send(err));
}

module.exports = exports;
