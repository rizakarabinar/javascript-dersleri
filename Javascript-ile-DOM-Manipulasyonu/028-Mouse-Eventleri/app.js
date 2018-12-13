// Klavye Eventleri


// keypress -- Sadece harfler ve sayilar dikkate alinir. Diger karakterlerde calismaz
//Start :
// document.addEventListener("keypress",fKeyPress);

// function fKeyPress(e){
//     console.log("key press calisti");

//     //Hangi tusa basildi peki : 
//     console.log(e.which); // ASCII tablosundaki degeri -- google it --> asci table
//     console.log(e.key); // bastigimiz degeri alabiliriz
// };



// // keydown
// //Start :
// //tusa bastigimiz anda calisan bir listenner. tum tuslarda aktif olarak calisir
// document.addEventListener("keydown", fKeyDown);

// function fKeyDown(e){
//     console.log(e.key);
// };

// keyup
//Start : 
// //basili bir tusu biraktigimiz anda calisan bir listenner. tum tuslarda aktif olarak calisir

// document.addEventListener("keyup", fKeyUp);

// function fKeyUp(e){
//     console.log(e.key);
// };




//Start : Yapacagimiz islem todo ekleyecegimiz yere yazdigimiz degerleri, baslikta toparlamak.
const header = document.getElementsByClassName("card-header")[0]; // const todoInput = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    //en son yazdigimiz girdinin tamamini almak icin ornek
    // console.log(e.target); // ile degisiklik yapilan yeri alabiliyorduk.
    // console.log(e.target.value); // ile de degisiklik yapilan degeri alabiliyoruz.
    header.textContent = e.target.value;
};

console.log(header); 
