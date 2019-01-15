// 

// Start :

// ES6 Oncesi

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function(){
//     console.log("isim =", this.name, "yas =", this.age);
// }

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.showInfos = function(){
//     console.log("isim =", this.name, "yas =", this.age, "maas =", this.salary);
// }

// const emp1 = new Employee("Riza",33,4000);
// emp1.showInfos();
// console.log(emp1);

// Start :

// Ecmascript 6 Sonrası: yukarıdaki islemlerin aynisini yapacagiz.

class Person { // SuperClass, BaseClass seklinde ifade edilir.
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("isim =", this.name, "yas =", this.age);
    }
}


/**
 * extends anahtar kelimesi kalitimi temsil eder. 
 */
class Employee extends Person{ // SubClass, ChildClass, DerivedClass seklinde ifade edilir.
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); // yukaridaki iki satir ile ayni isi yapar. Person nesnesinin constructor ini cagirmis olduk.
        this.salary = salary;
    }

    //Overriding #100
    showInfos(){
        console.log("isim = " + this.name + " yas = " + this.age + " maas = " + this.salary);
    }
    //Overriding
    toString(){
        console.log("bu yeni toString'dir");
    }
    // Yeni metodlari mizi da bu sekilde yazabiliriz.
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp1 = new Employee("Riza",33,3333);
emp1.showInfos(); // goreceginiz gibi salary yok. yani over ride a ihtiyacimiz var #100
emp1.toString();

emp1.raiseSalary(1000);
emp1.showInfos();