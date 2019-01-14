// Call Apply ve Bind
// Fonksiyonlarimizdaki __proto__ ozelliginin icinde bulunan fonksiyonlarımız


// Call

const obj1 = {
    number1: 10,
    number2: 20
}

const obj2 = {
    number1: 30,
    number2: 40
}

function addNumbers(number5,number6){
    console.log(this.number1 + this.number2 + number5 + number6); // NaN verdi, neden acaba :

    //sirasiyla yazdiralim
    console.log(this.number1); // bakiyoruz ki undefined, peki bu neden undefined:
    console.log(this); // goruyoruz ki window objesini yazdiriyoruz. Neden global scope dayiz cünküm. 
    //Herhangi bir constructor icinde olmadigimizdan kaynaklaniyor.
}

// addNumbers(1,2); // bu sekilde cagirdigimizda NaN geliyor, sebeperli yukarida.

addNumbers.call(obj1,1,2);
addNumbers.call(obj2,1,2);


// Apply :
// Call ile ayni islevi yapiyor, Call dan yapisal olarak bir farki var; degiskenleri dizi olarak vermemizi bekliyor.
addNumbers.apply(obj1,[1,2]); // Call dan farki, degiskenleri dizi olarak vermemizi bekliyor.
addNumbers.apply(obj2,[1,2]); // Call dan farki, degiskenleri dizi olarak vermemizi bekliyor.


// Bind :
// Daha cok eventlerde kullanılıyor ve kopya bir function olusturmaya yarar

getReturnTotal = (number7,number8) => this.number1 + this.number2 + number7 + number8;

function getReturnTotal2(number9,number10){
    return this.number1 + this.number2 + number9 + number10 ;
}

/** yukaridaki fonksiyonlar birbirinin ayni ama arrow function i da unutmayalim de mi :) */

const copyFunc1 = getReturnTotal.bind(obj1);
console.log(copyFunc1);

const copyFunc2 = getReturnTotal2.bind(obj2);
console.dir(copyFunc2); // burda log yerine kullandigimiz anahtar kelime daha detayli olarak sonuc verir.


console.log(copyFunc2(1,2));
console.log(copyFunc1(1,2)); // NaN donuyor sebebini anlamadim ????