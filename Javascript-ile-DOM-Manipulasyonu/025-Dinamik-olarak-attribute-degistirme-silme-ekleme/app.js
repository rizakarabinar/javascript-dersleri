const input = document.getElementById("todo"); //document.querySelectorAll(".form-control")[0];

let element = input;


// Start : 
// element = input.classList;
// input.classList.add("newClass");; //element = input.className ="form-control newClass"; // bu sekilde de yapilabilir.
// input.className ="form-control newClass newClass2"; 
// input.classList.remove("form-control"); // attribute u kaldirmak icinde bu yolu izliyoruz

// input.type = "checkbox";



//Start : 
// element = input.placeholder;
// element = input.getAttribute("placeholder");
// input.setAttribute("placeholder","deneme 4,5,6"); //  input.placeholder = "deneme 1,2,3"; // By sekilde de yaizlabilir.
// element = input.placeholder;
// input.setAttribute("title","title-eklendi");
// input.removeAttribute("title");
// element = input;
// console.log(element);


//Start : 
element = input.hasAttribute("name"); // var mi yok mu kontrolu
element = input.hasAttribute("required");

console.log(element);