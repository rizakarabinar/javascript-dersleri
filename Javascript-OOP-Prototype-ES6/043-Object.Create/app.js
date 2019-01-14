// Javascript in kendi dokumanlarından da arada bakmayi ihmal etmeyin.

// Object.create
/**
 * Bir obje oluştururken, prototype ini başka bir objeden almak istiyorsak Object.create kullaniyoruz.
 */


//  // Start : 
//  const obj = {
//     test1 : function(){
//         console.log("bu 1. function");
//     },
//     test2 : function(){
//         console.log("bu 2. function");
//     }
//  }

// //  console.log(obj);

// const emp = Object.create(obj);
// console.log(emp); // Kesinlikle inceleyin.

// emp.name = "riza";
// emp.age = 33;

// console.log(emp);


// Start :

// #1
function Person(){ // Constructor

}

Person.prototype.test1 = function(){
    console.log("test1");
}

Person.prototype.test2 = function(){
    console.log("test2");
}

const pers1 = new Person();

console.log(pers1);

// #2
function Employee(name,age){
    this.name = name,
    this.age = age
}

// employee mizin proto ozelligi Person objesini refere etsin :

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Riza",33);

console.log(emp1); // Kesinlikle incelenmeli.

// Person dan bir function cagiralim

emp1.test1();


// Start :
Employee.prototype.test3 = function(){
    console.log("test 3");
}

const emp2 = new Employee("Karabinar",22);
emp2.test3();

console.log(emp2);