console.log(this); //Window en genel objedir.


//////////////start alert mesaj.
// alert("merhaba");
// window.alert("merhaba");


//////////////start confimm yes/No question
// const cevap = confirm("emin misiniz?");
// console.log(cevap); //Gordugumuz gibi true ve false seklinde cevaplar alabiliyoruz.

// if(cevap){
//     console.log("silindi");
// }else{
//     console.log("silinmeyecek");
// }


////////////start prompt

// let xresponse = prompt("Deger giriniz = ");
// console.log(xresponse);
// console.log(typeof xresponse);

// if(xresponse == null){
//     console.log("cevap girmelisiniz");
// }else if(xresponse == 12){
//     console.log("cevap : 12")
// }else{12
//     console.log("cevap HATA");
// }


////Start window un ozelliklerinden bazilari

// let value;
// value = window;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;
// console.log(value);

// let cevap = confirm("Sayfa yenilensin mi");

// if(cevap) // yada if blogu icin : if(confirm("Sayfa yenilensin mi")) kullanilabilir.
//     window.location.reload;
// else
//     console.log("sayfa yenilenmedi ");



////Start
let value1;
let value2;
let value3;
let value4;

value1 = window.outerHeight; // Window nesnesinin cerceve dahil yuksekligini verir
value2 = window.outerWidth; // Window nesnesinin genisligini(cerceve dahil ) verir
value3 = window.innerHeight; // window nesnesinin ic yuksekligini(cerceve haric ) verir
value4 = window.innerWidth; // window nesnesinin cerceve haric genisligini verir.
let value5 = window.scrollX; // Html sayfaya div ekledik ve css yardımıyla div de scroll olusmasini sagladik
let value6 = window.scrollY;

console.log(value1,value2, value3, value4,value5, value6);