// Dinamik olarak Element Silme

const todoList = document.querySelector("ul.list-group"); // yeni syntax ile goreceginiz gibi ul lerden class i list-group olani al diyoruz.
const todos = document.querySelectorAll("li.list-group-item"); // let value =  todoList.children; //bu sekilde de yazilabiliyor
const value =  todoList.children; //bu sekilde de yazilabiliyor-- todoListten eksildikce burdan da eksilir...


console.log("todosF",todos);
console.log("valueF",value);  
console.log("-------------");  

// Start : 
//Remove metodu
// todos[2].remove(); // Kolaylikla kaldirilabildigini gozlemleyin

//Start : 
// Remove Child
todoList.removeChild(todoList.children[todoList.children.length-1]);
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[1]);

console.log(todoList);
console.log("todos",todos);
console.log("value",value);  