// Map veri  tipleri

// key - value şeklinde çalışır

// // Start :
// let myFirstMap = new Map(); // Map oluşturma
// console.log(myFirstMap); // Referans veri tipinde deger doner
// console.log(typeof myFirstMap); // goreceginiz gibi object Literal donecek.

// // An itibariyle key - value degerlerimiz yok. Bunları olusturalım

// const key1 = "Riza";
// const key2 = {name : "Beyhan",
//               age : 33,
//               salary : 5000};
// const key3 = () => false;

// // set
// // Key value verebilmek için kullanıyoruz
// myFirstMap.set(key1,"String Deger");
// myFirstMap.set(key2, "Object Deger");
// myFirstMap.set(key3, "Function Deger");

// // get
// // Key lerimizi okuyabilmek için kullanıyoruz.
// console.log(myFirstMap.get(key1));
// console.log(myFirstMap.get(key2));
// console.log(myFirstMap.get(key3));

// // map in boyutunu ogrenmek icin.
// console.log(myFirstMap.size)


// // Start :
// // Sehir ve plaka tanımlamalarımızı içerelim.
// const cities = new Map();

// cities.set("Ankara","06");
// cities.set("İstanbul","34");
// cities.set("İzmir","35");

// // #forEach
// cities.forEach(function(value,key){
//     console.log(key,value);
// });

// // # for of
// for(let c of cities){
//     console.log(c); // array döndüğünü göreceğiz
// };


// // Start :
// // peki key ve value degerini ayrı ayrı elde edemez miyiz =>
// for(let [key,value] of cities){ // Distructing yapısı kullanıdk :)
//     console.log(value,key); // gördüğünüz gibi elde edebildik.
// }


// // Start :
// // Sadece KEY degerlerini almak istersek :
// for(let key of cities.keys()){
//     console.log(key);
// }

// // Sadece VALUE degerlerini almak istersek :
// for(let value of cities.values()){
//     console.log(value);
// }


// // Start :
// // MAP ve Array arasındaki bag :

// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array); // sorunsuz çalıştı.

// console.log(lastMap); // array daki değerleri map imizde görebilirsiniz.

// Start : 

// Maplerden array oluşturma

const cities = new Map();

cities.set("Ankara","06");
cities.set("İstanbul","34");
cities.set("İzmir","35");

const array = Array.from(cities); // HTMLCollection ı array e dönüştürürken de kullanmıştık
console.log(array); // Sonucunu console dan incelemekte fayda var!!! üyeleri array olan bir array oluştu.
