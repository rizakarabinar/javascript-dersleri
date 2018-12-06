//Fonksiyon tanimlama
function sayHello (){
    console.log("Hello");
}

sayHello(); //funciton call

//Ornek 1
function sayHello2(name,age){
    if(typeof name === "undefined") name = "bilgi yok";
    if(typeof age === "undefined") age = "yas yok";
    console.log(`isim: ${name} Yaş : ${age}`);
}

sayHello2("Riza","33");
sayHello2();

//Ornek 1 i daha guzel yazabiliriz
function sayHello3(name = "isimsiz", age = "yassiz"){
    console.log(`isim : ${name} yas : ${age}`);
}
sayHello3();
sayHello3("merve",29);
sayHello3("bilge");


//Return

//karesini almak icin fonksiyon
function square(x){
    console.log(x*x);
}

//kup almak icin fonksiyon
function cube(x) {
    console.log(x*x*x);
}

let a = square(5);
a = cube(a); // NaN hatasi aliriz, fonksiyon bize return ile deger donmedigi icin.

//return kullanarak yazalim.
//karesini almak icin fonksiyon
function square2(x){
    return x*x;
}

//kup almak icin fonksiyon
function cube2(x) {
    return x*x*x;
}

let b = square2(5);
b = cube2(b);
console.log(b);

//daha da guzel yazimi
let c = cube2(square2(5));
console.log(c);


//return ayni zamanda fonksiyonu bitirmeye de yarar
function cube2(x) {
    return x*x*x;
    console.log("hic bir zaman calistirilmayan komut olarak kalirim.");
}

function merhaba(){
    return "merhaba";
}
console.log(merhaba());



// Function/Metod expression

const hello = function(isim){
    console.log("hello " + isim);
}

hello("Riza");

// Immediately Invoked Function Expression (IIFE)
(function(isim){
    console.log("s.a " + isim);
}
)("riza");


//Bir obje ornegi ve kullanim sekli

//Ornek objemizin bir property si ve 4 metodu olacak.
const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("kayit elde edildi");
    },
    update: function(id){
        console.log(`kayit guncellendi : ${id}`);
    },
    delete: function(id){
        console.log(`kayit silindi : ${id}`);
    }
}

//obje mizin nimetlerinden faydalanalım.
console.log(database.host);
database.add();
database.get();
database.update(1);
database.delete(2);