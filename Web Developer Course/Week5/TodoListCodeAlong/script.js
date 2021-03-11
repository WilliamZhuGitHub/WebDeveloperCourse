const todos = [];

let input = prompt("What would you like to do?").toLowerCase();

//functions delcaration
const addTodo = () =>{
    //prompt user to see which item to add
    todos.push(prompt("What would you like to add? "));
}

const removeTodo = () => {
  //prompt user which item to remove
  const remove = prompt("Which Todo to remove?");
  //check if item exists in list
  const i = todos.indexOf(remove)
  if( i !== -1){
    //if item exists remove it
    console.log("Removing item: " + todos[i]);
    todos.splice(i, 1)
  }
  else{
    //else output an error msg
    console.log("item was not in the todo list");
  }
}

// main loop
while (input !== "quit") {
  if (input == "show") {
    console.log(todos);
  } else if (input === "new") {
      addTodo();
  } else if (input === "remove"){
    removeTodo();
  }
  input = prompt("Okay what would you like to do now?").toLowerCase();

}

console.log("all done!");
