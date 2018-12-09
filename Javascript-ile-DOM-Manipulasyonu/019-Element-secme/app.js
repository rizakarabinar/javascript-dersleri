//Element Secme

let element;


//Element i id ye gore secme

element = document.getElementById("todo-form"); // element = document.forms[0]; ile ayni sey
element = document.getElementById("tasks-title");


//Clas ismine gore element secme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");


// Element tag e gore secme

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");


//Simdi yukarida ogrendigimiz tum yontemler yerine kullanabilecegimiz bir yontem gorecegiz

//Query Selector - css selecter
//Sayfadaki tek elementi secer, ayni ozellige sahip olan birden fazla element var ise, ilkini doner...

element = document.querySelector("#todo-form"); // # ile yazilirsa id yi ifade eder
element = document.querySelector("#tasks-title");


element = document.querySelector(".list-group-item"); // . kullanarak class i secmis olduk

element = document.querySelector("li");


//tek element degil de tum elementleri almak isterek querySelectorAll u kullanabiliriz.
element = document.querySelectorAll(".list-group-item"); // NodeList donecektir, HtmlCollection a benzer ancak bunun icinde direk forEach ile donebiliriz

element.forEach(function(e){
    console.log(e);
});


console.log(element);