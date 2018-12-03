//Degiskenler

/**
 * 
 * yorum satirlari
 * yorum satiri yapmanin kisa yolu Ctrl + ö
 */

//  var a = 20;
//  var b = 10;
//  var c = 40;

//  console.log(a,b,c);


//Primative Degisken tipleri --Start

var a = 7; // Number veri Tipi
var b = 3.14; // Number Veri tipi
console.log(a);
console.log(typeof a);
console.log(b,typeof b);

var name = "Rıza"; //String veri tipi
console.log(name);
console.log(typeof name);

var x = true; //boolean veri tipi
console.log(x);
console.log(typeof x);

var n = null; //Null veri tipleri
console.log(n);
console.log(typeof n); // Object donmesi dogru degil, bug olarak kabul edilebilir.

var ud;
console.log(ud);
console.log(typeof ud);

//Primative Degisken tipleri --Finish


/**
 * Primative degiskenler ile Referans veri tipleri arasindaki en onemli fark
 * ram uzerinde tutulus seklinden kaynaklanir. Referans tipler adresleme yon-
 * temi ile degerleme yapar.
 */

//Referans Veri Tipleri --Start

var numbers = [10,20,30,40];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);

var person = {
    name : "Riza Karabinar",
    age  : 33
}
console.log(person);
console.log(typeof person);

var date = new Date();
console.log(date);
console.log(typeof date);

var sayHello = function(){
    console.log("Hello");
}
console.log(sayHello);
console.log(typeof sayHello);


var x = 10 ;
var y = x;
console.log(x,y);
var x = 20;
console.log(x,y);


var x = [10,20,30];
var y = x;
console.log(x,y)
x.push(40);
console.log(x,y);


//Referans Veri Tipleri --Finish
