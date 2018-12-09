//Todo list html ini kullanmaya devam edecegiz.


// window object

// console.log(this);

//Document Object

// console.log(this.document); // window objesinin icinde oldugu icin, this.document yerine; direk document olarak kullanlılabilir. this.alert de de ayni durum vardi hatirlarsak.

//start
// let value ;

// value = document;
// value = document.all; // Html collection dondugunu goreceksiniz.
// value = document.all.length; //kac element imiz oldugunu gorebilriz
// value = document.all[0]; // elementleri diziler gibi cagirabiliyoruz
// value = document.all[document.all.length - 1];

// console.log(value);


//start
// const elements = document.all; // Html Collection

// console.log(elements);

// for(i = 0 ; i < elements.length ; i++){
//     console.log(elements[i]);
// }


// Html Collection larda for disinda dongu kullanilamaz oldugunu alacagimiz hatadan anlayabiliriz.
// elements.forEach(function(element){
//     console.log(element);
// });


// Peki bu durumu kullanabilmek icin alternatif yolumuzu gorelim. Html collection uzerinde gezinmek istersek onu diziye cevirmek gerek
// const collections = Array.from(elements);
// collections.forEach(function(collection){
//     console.log(collection);
// });


//start

let value = document.all; // body elementini almak istersek, goreceksiniz 8. elemente ihtiyac duyuyoruz.
value = value[8];
value = document.all[8];
value = document.body;
//gordugunuz gibi bir suru sekilde body i elde edebiliyoruz
value = document.location.hostname;
value = document.location.port;
value = document.URL; 
value = document.characterSet; // meta charset de tasinan deger

console.log(value);


