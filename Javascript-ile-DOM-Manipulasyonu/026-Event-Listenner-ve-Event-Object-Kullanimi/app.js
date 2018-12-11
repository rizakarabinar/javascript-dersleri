//

const filterInput = document.getElementById("filter");
//Start
//yontem 1
// filterInput.onfocus = function(){
//     console.log("focuslanildi.");
// }
    
//Start
// filterInput.addEventListener("focus",function(){
//     console.log("2.yontem");
// });

        

//Start
// filterInput.addEventListener("focus",function(e){
//     console.log(e); // Event objesi doner, simdi event objesini yazdirip detaylarini inceleyelim.
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });
            
            
            
//Start
//Form u sectik, form da submit calistiginde bir function calissin istiyoruz
const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("submit eventi");

    e.preventDefault(); //Bu metod yardimiyla, Sayfamizin default ozelligi olan, kendini yenileme ozelligini iptal ediyoruz.
    /**
     * guvenli olani da en altta olanidir.
     */
};


console.log(todoForm);
// console.log(filterInput);