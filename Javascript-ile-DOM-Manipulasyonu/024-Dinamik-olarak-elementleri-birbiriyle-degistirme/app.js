// Replace

const cardBody = document.querySelectorAll(".card-body")[1];

//<h5 class="card-title" id = "tasks-title">Todolar</h5>
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.appendChild(document.createTextNode("TODO Listesi"));

//Eski Elementi Secmemiz lazim
const oldElement = document.querySelector(".card-title");

cardBody.replaceChild(newElement,oldElement);


console.log(newElement);