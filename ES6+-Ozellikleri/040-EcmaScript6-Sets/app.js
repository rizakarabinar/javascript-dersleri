// Setler : Kümeler
// Bir değeri bir defa taşımak en büyük özelliğidir.

// // Start :
const myFirstSet = new Set();

console.log(myFirstSet);

myFirstSet.add(1);
myFirstSet.add(1); // bir değer bir defa tutulur dedik, sorun çıkarmıyor ama eklemiyorda...
myFirstSet.add(3.14);
myFirstSet.add("riza");
myFirstSet.add(true);
myFirstSet.add([1,2,3]);
myFirstSet.add({name: "riza", age: 33});
myFirstSet.add(function(){
    return true;
});

// const myMap = new Map();
// myMap.set("istanbul",20);
// myMap.set("ankara",5);

// myFirstSet.add(myMap);

// // gordugunuz gibi herbir veri tipinden değer taşıyabiliyor.
// console.log(myFirstSet);

// // değerler tek tek eklenebildiği gibi, tanımlama sırasında da verilebilir :
// const myFirstSet2 = new Set([1,3.14,"riza",true,[1,2,3]]); // tüm değerleri yazmadik
// console.log(myFirstSet2);

// // Set in eleman sayısı için :
// console.log(myFirstSet.size,myFirstSet2.size);

// // Set'ten eleman silmek için delete kullanabiliriz :
// myFirstSet.delete(1);
// myFirstSet.delete("Riza"); // set icinde riza olarak yer aldıği için silme işlemi gerçekleşmedi.
// console.log(myFirstSet);

// // bir değerin set içinde yer alıp almadığını HAS ile kontrol edebiliriz :
// console.log(myFirstSet.has("riza")); // true olarak cevap alırız.
// console.log(myFirstSet.has([1,2,3])); // false olarak cevap alırız. Referans veri tipleri

console.log("--------------------");

// // START :
// // forEach ile setimiz üzerinde dolaşalım.
// myFirstSet.forEach(function(s){
//     console.log(s);
// });

// // START :
// // for of
// console.log("--------------------");
// for(let s of myFirstSet){
//     console.log(s);
// }

// // START :
// // for in dongusunun calismadigini goreceksiniz. ????
// console.log("--------------------");
// for(let s in myFirstSet){
//     console.log(s);
// }


// Setten array oluşturmak.

const array2 = Array.from(myFirstSet);
console.log(array2);