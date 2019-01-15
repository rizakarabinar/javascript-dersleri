// Ecmascript6 ile yazim yontemlerinde gelismeler/degismeler var
// arka tarafta hersey ogrendigimiz gibi calisiyor aslinda

// Syntactic Sugar diyoruz bu yontemede :

// Start : ES6 Oncesi

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function(){
    console.log("isim : " + this.name + " yas : " + this.age + " maas : " + this.salary);
}

const emp1 = new Employee("Riza",33,4000);

emp1.showInfos();
console.log(emp1);

// Start : ES6 Sonrasi
class Employee2 {
    
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    showInfos(){
        console.log("isim : " + this.name + " yas : " + this.age + " maas : " + this.salary);
    }
}

const emp2 = new Employee2("Riza",33,6666);
emp2.showInfos();
console.log(emp2); // emp1 i de incelediginizde birbirinden hicbir farki olamadigini goreceksiniz. sadece syntax farkli.