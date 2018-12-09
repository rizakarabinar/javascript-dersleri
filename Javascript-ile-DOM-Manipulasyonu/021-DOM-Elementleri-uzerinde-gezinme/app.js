let  value;


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row"); //birden fazla class a sahip olan icin syntax boyledir


value = todoList;
value = todo;
value = cardrow;


// Child Nodes - Text Dahil aliyor

value = todoList.childNodes;// index html de ilgili elementteki Satir atlamalari da birer child olarak algiliyor
value = todoList.childNodes[0];


//Children Ozelligini - Sadece Elementleri verir
value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent = "Degistirildi"; // ilgili element te degisiklik yaptik. // ayni zamanda yeni bi syntax gozunuze carpmistir


//Start : 
value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "burasi da degistirildi";




value = todoList;
value = todoList.children[0]; // ilk cocugu almanin kolay yolu
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length; // child sayisini anlamak icin daha kolay bir yol da var
value = todoList.childElementCount;


value = cardrow;
//bir ust elementi almak icin

value =cardrow.parentElement;
value = cardrow.parentElement.parentElement; // bu sayede body ye kadar aldik.


//Element kardesleri bulalim

value = todo;
value = todo.previousElementSibling; // bir onceki kardesi alir.
value = todo.nextElementSibling; // bir sonraki kardesi alir. Onceki yada Sonraki kardesi bulmak isterken sonuc yoksa Null doner

console.log(value);