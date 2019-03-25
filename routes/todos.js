var express = require('express'),
    router  = express.Router(),
    helpers = require('../helpers/todo');

router.route("/")
  .get(helpers.getTodos)
  .post(helpers.postTodo);

router.route("/:todoId")
  .get(helpers.getTodo)
  .put(helpers.putTodo)
  .delete(helpers.deleteTodo);

module.exports = router;