
const title = document.querySelector("#tasks-title");
console.log(title);


// //  Start : Click Eventi -- Mouse tiklandiginda calisacak olan eventtir. // Sag tikta calismadigini gözlemleyiniz.
// title.addEventListener("click",run);

// function run(e){
//     console.log(e);
//     console.log(e.type); // Event in type ini verir, donene deger "click" olacaktir.
// };

// //Start : Double Click Eventi
// title.addEventListener("dblclick",run2);

// function run2(e){
//     console.log(e.type);
// };


// // Start : Mouse Down Eventi // Mouse Click eventine benziyor, ancak islemin tamamlanmasini beklemez. sağ tık sol tik farketmez.
// title.addEventListener("mousedown",run3);

// function run3(e){
//     console.log(e.type);
// };

// // Start : Mouse Up Eventi // Mouse Tuslarinin herhangi birinden el cektigimizde calisir.
// title.addEventListener("mouseup",run4);

// function run4(e){
//     console.log(e.type);
// };

// // Start : Mouse Over Eventi : Mouse elementin uzerinden gectiginde calisir.

// title.addEventListener("mouseover",function(e){
//     console.log(e.type);
// });

// // Start : Mouse Out eventi ilgili elementten cikildiginde calisir.

// title.addEventListener("mouseout",function(e){
//     console.log(e.type);
// });

// // START:
//  //Mouse Over ve Mouse Out in extra bir ozelliginin farkinda olalim istiyorum.
const cardBody = document.getElementsByClassName("card-body")[1];
// console.log(cardBody);

// //Start : 
// cardBody.addEventListener("mouseover",function(e){
//     console.log(e.type); // goreceksiniz ki ayni elementin icindeki, diger elementlerde gezerken de tekrar tekrar cagirilacak.
// });

// //Start : 
// cardBody.addEventListener("mouseout",function(e){
//     console.log(e.type); // goreceksiniz ki ayni elementin icindeki, diger elementlerde gezerken de tekrar tekrar cagirilacak.
// });


// START : Aklinizda ben bu elemente girdigimde ve ciktigimda bir defa calisacak birseyi nasil yaparim sorusu olustuysa eger :
// Goreceginiz gibi yalnizca bir defa calisacaklar, "mouseenter" ilk giriste, "mouseleave" sadece cikista.
cardBody.addEventListener("mouseenter",run5);
cardBody.addEventListener("mouseleave",run5);

function run5(e){
    console.log(e.type);
};