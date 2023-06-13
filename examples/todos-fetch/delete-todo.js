fetch("http://localhost:3000/todos/13", {
  method: "DELETE",
})
  .then((response) => console.log(response.status, response.statusText));
