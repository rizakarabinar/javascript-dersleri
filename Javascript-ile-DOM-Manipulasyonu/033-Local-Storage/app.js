// 
/**
 * Local Storage
 * session storage dan temel farki : Bilgisayar kapansa bile verilerimizi kaybetmedigimizi goreceksinz
 */



//  

// SetItem


// Start : 
// localStorage.setItem("key1","value1");
// localStorage.setItem("tekrarDegeri",100); // bilmeliyiz ki integer bir deger bile yazsak, depolama alaninda string olarak tutulur.

// //String tutuldugunu gorelim
// // GetItem kullanacagiz

// const val = localStorage.getItem("tekrarDegeri");
// console.log(val);
// console.log(typeof val);

// // Start :
// // Clear localstorage : Localstorage ı temizleme

// localStorage.clear();


// // Start : 
// localStorage.setItem("arac1","bmw");
// localStorage.setItem("arac2", "renault");

// console.log(localStorage.getItem("arac3")); // goreceksiniz ki null bir nesne donecektir.

// if(localStorage.getItem("arac4") === null){
//     console.log("sorguladiginiz deger bulunamadi");
// }

// // yada

// if(localStorage.getItem("arac1") === null){
//     console.log("soguladiginiz deger YOK");
// }
// else{
//     console.log("sorguladiginiz deger VAR"); // bir satiri oldugu gibi kopyalamanın kısa yolu alt + shift + up/down tuslari dir, satiri tasimanin da  kisa yolu alt + up/down seklindedir.
// }

// Local Storag a array yazma

// // Start :

// const araclar = ["bmw","renault",  "mercedes"] ;

// localStorage.setItem("araclar",araclar); 
// console.log(localStorage.getItem("araclar"));// goreceginiz gibi sonucu ekrana yazacaktir ancak yazdigi tip string olacaktir. Ancak biz array olarak yazmak istiyoruz.
// console.log(typeof localStorage.getItem("araclar"));

// // array olarak alabilmek icin 

// const araclar2 = ["mercedes","bmw","dacia"];
// localStorage.setItem("araclar2",JSON.stringify(araclar2));
// console.log(localStorage.getItem("araclar2"));
// console.log(typeof localStorage.getItem("araclar2")); // yine string olarak goreceksiniz

// // peki biz bu degeri array olarak nasil alacagiz
// console.log(JSON.parse(localStorage.getItem("araclar2")));
// console.log(typeof JSON.parse(localStorage.getItem("araclar2"))); // object olarak dondugunu gozlemleyebilirsiniz


// index.html de olusan formdan girilen degerleri local storage a yazan bir ornekleme yapalim.

const add = document.querySelector(".btn.btn-danger"); // tus a click oldugunda yemedi? acaba neden ????????
const form = document.getElementById("todo-form");
const input = document.querySelector("#todo");

// console.log(add);
// console.log(input);
// console.log(form);

// add.addEventListener("click", addTodos);
// 


form.addEventListener("submit",addTodos);

function addTodos(e){
    const value = input.value;
    let todos ; 
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos")); // localstorage daki degeri, stringify olarka yazilmisti, parse ederek aldik.
    }

    todos.push(value); // dizimize eleman ekledik.
    localStorage.setItem("todos",JSON.stringify(todos)); // dizimizi stringify ederek localstorage a yazdik.

    e.preventDefault();
};
