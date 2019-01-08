// OOP giris
// java daki class lar burda obje olarak kullanılacaktır.

// // Start :
// console.log(window);
// console.log(this); 
// /**
//  this => uzerinde bulundugumuz objeyi(window u) gosterir. // Global scope daki en temel obje this dir.
// */

// // Start :
// // Object Literal
// const emp1 = {
//     name : "riza",
//     age : 33,
//     showInfos : () => {console.log("Bilgiler gosteriliyor") // sonradan ekledik. Arrow function
// }
// };

// const emp2 = {
//     name: "beyhan",
//     age: 23
// };

// console.log(emp1);
// emp1.salary = 3000;
// console.log(emp1);
// emp1.showInfos();
// /**
//  * diyelim ki 100 tane calisana ihtiyacımız varsa, tek tek yazacak degiliz ya; hadi devam edelim
//  */

// Start :
// Yapıcı fonksiyon/metodlar - Constructor lar.
// function olarak yazilir, adinin buyuk harfle baslamasi onemlidir.


// // Start :
// function Employee(){
//     this.name = "Riza";
// }

// const emp3 = new Employee();
// const emp4 = new Employee();

// console.log(emp3);
// console.log(emp4);
// /**basitçe anlattık, şimdi gelin gerçek dünyada nasıl kullanıyoruz onu görelim. */


// Start :
function Employee(name,age,salary){
    this.name = name,
    this.age = age,
    this.salary = salary;

    // showInfos : () => {console.log(this.name,this.age,this.salary)}; // ???? bu sekilde yazamadik
    this.showInfos = function(){console.log(this.name,this.age,this.salary)}; // hala aynı objede olduğumuz için this. ile yazılanlar bize obje değerlerini verir

    console.log(this); // hangi obje olusursa onu verir
}

const emp5 = new Employee("Riza", 33, 5000);
const emp6 = new Employee("Behcet", 23, 6000);

console.log(emp5);
emp5.showInfos();

console.log(this); // global scope da oldugumuz icin window objemizi veriyor.