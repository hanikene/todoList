var $;

$(document).ready(function() {
	$.getJSON("/api/todos")
	.then(addTodos);
});

function addTodos(todos) {
	todos.forEach(function(todo) {
		addTodo(todo);
	});
}

function addTodo(todo) {
	var newTodo = $("<li><span><i class='far fa-trash-al'></i></span> " + todo.name  + "</li>");
	newTodo.data('id', todo._id);
	newTodo.data('completed', todo.completed);
	if (todo.completed) {
		newTodo.addClass("done");
	}
	$("ul").append(newTodo);
}

$("input").on("keypress", function(event) {
	if (event.which === 13) {
		var newTodo = $(this);
		$.post("/api/todos", {name: newTodo.val()})
		.then(function(todo) {
			addTodo(todo);
			newTodo.val("");
		})
		.catch(function(err) {console.log(err)});
	}
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		deleteTodo($(this));
	});
	event.stopPropagation();
});

function deleteTodo(todo) {
	var dataId = todo.data("id");
	var todoIdUrl = "/api/todos/" + dataId;
	$.ajax({
		method: "DELETE",
		url: todoIdUrl
	})
	.then(function() {
		todo.remove();
	})
	.catch((err) => console.log(err));
}

$("ul").on("click", "li", function() {
	var todo = $(this);
	var isDone = !todo.data("completed");
	var putURL = "/api/todos/" + todo.data('id');
	var updatedData = {completed: isDone};
	$.ajax({
		method: "PUT",
		url: putURL,
		data: updatedData
	})
	.then(function() {
		todo.toggleClass("done");
		todo.data("completed", isDone);
	})
	.catch(function(err) {console.log(err)});
});

// $("ul").on("click", "li", function() {
// 	$(this).toggleClass("done");
	
// });

// $("ul").on("click", "span", function(event) {
// 	$(this).parent().fadeOut(500, function() {
// 		$(this).remove();} );
// 	event.stopPropagation();
// });

// $("input").on("keypress", function(event) {
// 	if (event.which === 13) {
// 		var newTodo = $(this).val();
// 		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo  + "</li>");
// 		$(this).val("");
// 	}
// });

$(".fa-plus").click(function() {
	$("input").fadeToggle();
});