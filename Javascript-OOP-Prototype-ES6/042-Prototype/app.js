// Cok onemli bir konu !!!


// // Start :

// // En temel objemiz Object objesidir. Unutmayalim.
// const object = new Object();
// object.name = "Riza";
// console.log(object); 
// /**
//  * Console a Objemizi bastigimizda,
//  * daha once de gordugumuz ama farkinda olsak da üzerinde konusmadigimiz bir,
//  * objesi daha olduguna dikkat edelim : __proto__
//  * peki ne ise yarar.
//  * 
//  * ikinci bir Obje daha olusturdugumuzda da __proto__ objesi olusmayacak aslinda, ayni obje ye ait 
//  * __proto__ lar tek noktadan temsil edilecek. 
//  * yani tekrar eden functionlarin tekrar etmesinin onune gecmis olacak.
//  * 
//  * Bu arada Javascript "proto" temelli bir dildir. 
//  */

//  const object2 = new Object();
//  object2.name = "karabinar";
//  console.log(object2);


// // Start :
// function Employee(name,age){
//     this.name = name;
//     this.age = age;

//     this.showInfos = function(){console.log("bilgiler gosteriliyor!")};

//     // #3
//     this.toString = function(){console.log("bu bir Employee nesnesidir.")}
// }

// const emp1 = new Employee("Riza",33);
// console.log(emp1);

// //inceledigimizde gorecegiz. Kendi prototype inin icinde en temel objemizin yani Object in protitype i olduğunu gorecegiz.
// // bu durum javascriptte prototype chain  olarak ifade edilir.ve direk nesnemiz uzerinden Object e ait functionlar cagirilabilir. Örn:

// console.log(emp1.toString()); // [object Object] => Once kendi prototype inda ariyor, bulamazsa Object nesnesinde ariyor => #3


// Start :
// Prototyplerin bize sagladigi en buyuk avantaja gelelim
// Nesnelerimiz kac adet uretilirse bellekte o kadar yer kaplarken,
// Hatırlarsak : __proto__ nesnesi sadece bir tane uretiliyordu.
// Bu durumda function larımızı proto objemize yazarsak bize çok büyük avantaj sağlamış olur.
// Bellegimizi gereksiz yere kirletmemis oluruz.
//Soyle ki :

// //Start :
// // #100
// function Employee(name,age){
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("Ad : ",this.name, "Yas : ", this.age);
//     };
// }

// const emp1 = new Employee("Riza", 33);
// const emp2 = new Employee("Ozgur", 30);
// emp1.showInfos();

// console.log(emp1);
// console.log(emp2);

//Start :
// #101
// ayni ornegi showInfos functionı, proto ozelliginde yazarak yapalım.

function Employee2(name,age){
    this.name = name;
    this.age = age;
}

Employee2.prototype.showInfos = function(){
    console.log("Adim : " + this.name + ", Yasim : " + this.age);
};

const emp3 = new Employee2("Beyhan", 40);
emp3.showInfos();