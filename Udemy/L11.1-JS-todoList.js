var todos = []

var input = prompt ("What would you like to do?")

while(input !== "quit"){

	if(input==="list") {
		listTodos();
	}
	
	else if (input==="new"){
		newTodos();
	}
	else if (input==="delete"){
		deleteTodos();
	}
input = prompt ("What would you like to do?");
}

// 如果 input = "quit" while loop 便不會執行

// input === "quit"
console.log("OK, you quit the app")



// 將一些函數整理到下面來，容易理解

function listTodos(){
	console.log("**********")
	todos.forEach(function(todo,index){
	console.log(index + ": " + todo)});
	console.log("**********");
}

function newTodos(){
	//ask for new todo
	var newTodo=prompt("Enter new todo");
	//add to array
	todos.push(newTodo);
	console.log("added todo");
}

function deleteTodos(){
	//ask for index of todo to be deleted
	var deleteTodos=prompt("Enter index of todo to delete");
	//delete that todo
	//splice
	todos.splice(deleteTodos, 1);
	console.log("deleted todo");
}