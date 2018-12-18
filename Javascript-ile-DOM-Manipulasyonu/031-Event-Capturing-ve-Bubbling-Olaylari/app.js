// Bu Konu ile Event kavramini sonlandirmis olacagiz

// Event Bubbling ve Event Capturing/Delegating


// Start :
// Event Bubbling --> Olay Kabarciklanmasi

// const container = document.querySelector(".container");
// const cardRow = document.querySelector(".card.row");
// const cardBody = document.querySelectorAll(".card-body")[1];

// // console.log(container); // sectigimiz elementi gormek icin 
// // console.log(cardBody); // sectigimiz elementi gormek icin 

// container.addEventListener("click",run1);
// cardRow.addEventListener("click",run2);
// cardBody.addEventListener("click",run3);

// function run1(e){
//     console.log("Div Container");
// }
// function run2(e){
//     console.log("Card Row");
// }
// function run3(e){
//     console.log("Card Body");
// }
/**
 * Temelde mantik su, bir elemente verilen listener ait oldugu tum ebebeynlere kadar ulasir.
 */

// Start :
// Event Capturing/Delegation --> Olay yakalama
const cardBody2 = document.querySelectorAll(".card-body")[1];


// // Start : 
// cardBody2.addEventListener("click",run4);

// function run4(e){
//     console.log(e.target); // ekranda tam olarak hangi elemente bastigimizi alabiliyoruz. Bu durumda -->
// }

cardBody2.addEventListener("click",run5);

function run5(e){
    if(e.target.className === "fa fa-remove")
        console.log("temizle");
    if(e.target.id === "filter"){
        console.log("filtreleme alanina girildi.");
    }
    if(e.target.id === "clear-todos"){
        console.log("hepsini temizle");
    }
    //        console.log(e.target);
}