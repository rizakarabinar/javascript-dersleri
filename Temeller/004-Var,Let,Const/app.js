//Var ile degisken tanimlamak

var a;
console.log(a);
console.log(typeof a);
a = 20;
console.log(a);
console.log(typeof a);

var a = "riza";
console.log(a);
console.log(typeof a);


// Let ile degisken tanimlama

// let a = "karabinar"; // Daha once tanimlanmis degisken isimleri kullanılamaz
let b = "karabinar"; // Daha once tanimlanmis degisken isimleri kullanılamaz

// let a = "karabinar"; //Tekrar tanimlamada hata verecektir.

let x,y;

x= 10;
y = 20;

console.log(x+y);


//Const ile degisken tanimlama --Sabit degisken

const name = "riza karabinar";
console.log(name);

// name = "karabinar riza";
/**
 * name tekrar atama yapmak istedigimize;
 * Uncaught TypeError: Assignment to constant variable. seklinde hata verir
 * ancak const olarak primative yerine referans tipli bir degisken tanimlarsak
 * sorun yasamayacagimiz ornek asagidadir:
 */

 const t = [1,2,3,4,5];
 console.log(t);

 //t = [12,14,15,16,17] dersek sorun cikar. Ancak
 t.push(6);
 console.log(t);//Goreceginiz gibi sorunsuz calisacaktir.


 /**
  * let ve const kullanarak devam edecegiz, var in js icin bir anlami kalmadi
  */