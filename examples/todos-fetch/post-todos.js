let newToDo = {
  userId: 2,
  title: "do that thing",
  completed: true
};

let newTodoAsJSON = JSON.stringify(newToDo);

fetch("http://localhost:3000/todos", {
method: "POST",
headers: {"Content-type": "application/json"},
body: newTodoAsJSON,
})
  .then((response) => response.json())
  .then((bodyData) => console.log(bodyData));
