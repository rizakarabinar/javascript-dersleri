
// // Start : 
// // Primitive tipler

// let a = "Riza";
// let b = "Riza" ;

// if( a === b){
//     console.log("true"); // Primitive tiplerde console a TRUE yazdigini gözlemleyebiliriz.
// }

// // Referans tipler

// array1 = [1,2,3,4,5];
// array2 = [1,2,3,4,5];

// if( array1 === array2){
//     console.log("TRUE"); // Göreceğiniz gibi console a true yazamadık.
// }

// /**
//  * yani şöyle ki referans tiplerinde eşitlik kontrolü yaptığımızda bellek(Ram) üzerinde,
//  * aynı yeri gösteriyorlar mı diye kontrol ediyoruz ve bu yüzden true sonucu alamıyoruz
//  */

//  const person1 = {
//      name : "riza",
//      age : "33"
//  }

//  const person2 = {
//      name : "riza",
//      age : "33"
//  }

//  if( person1 === person2){
//     console.log("TRUE"); // Göreceğiniz gibi Objelerde de durum aynı, console a true yazamadık.
// }


// Start : 

const cities = new Map();

cities.set("Ankara","312");
cities.set("Bolu","374");

console.log(cities.get("Ankara"));

// Simdi gelelim zurnanın son deligine :)

cities.set([1,2,3],"Array");

console.log(cities.get([1,2,3])); // undefined alırız.  =>
/** Nedeni ise hem set ederken hemde get ederken kullanılan diziler Bellekte iki farklı nokta.
 * aynı gibi görünsede ramde farklı iki noktadan refere ediliyorlar. 
 * Bu durumu şöyle çözebiliriz =>
*/

const key = [1,2,3,4];
cities.set(key,"Array2");
console.log(cities.get(key)); // gozlemleyeceğiniz gibi iki aynı noktayı refere eden bir key ile sorunu giderdik.

