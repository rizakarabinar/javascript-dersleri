// Ecmascript6 dan sonra bu tarz kalitim islemleri yapmiyoruz. 
// Ama biz temelimizi alalim.

// Kalitim / Inheritance --> Miras almak


// Start : 
function Person(name,age){
    this.name = name,
    this.age = age
}

Person.prototype.showInfos = function(){
    console.log("isim :",this.name, "Yaş :", this.age);
}

// const pers1 = new Person("Riza",33);
// pers1.showInfos();
// console.log(pers1);


// Start :
function Employee(name,age,salary){
    // this.name = name; // Burada name ve age aslinda person objesinden alinabilir.
    // this.age = age; // bu islemi bir onceki konuda bahsi gecen call/apply ile ele alabiliriz :
    Person.call(this,name,age);
    this.salary = salary;
}

// Employee.prototype = Object.create(pers1);
Employee.prototype = Object.create(Person.prototype); // Kalıtım işlemimiz tamamdır. Person in sahip olduklarina da sahibiz artık.
const emp1 = new Employee("Riza",33,3000);
emp1.showInfos(); // Goreceginiz gibi sadece isim ve yasi yazacak, maaasi yazmak icin metodu ezmemiz gerekiyor. asagida toString ile beraber gorecegiz.
console.log(emp1);
console.log(emp1.toString()); // toString metodunu kendi prototype imizda yazarsak ezmiş oluruz. Görelim : 


// Overriding
Employee.prototype.toString = function(){
    console.log("toString metodunun yeni hali");
}

console.log(emp1.toString()); // Return donmedigi icin undefined cikar.

emp1.toString();

// Overriding
Employee.prototype.showInfos = function(){
    console.log("isim :", this.name, "yas :", this.age, "maas :", this.salary);
}

emp1.showInfos();
console.log(emp1);











