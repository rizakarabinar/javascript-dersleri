let value;

//Veri tiplerini string e cevirme
value = 123;
value = String(value);
value = String(true);
value = String(3.14);
value = String(function(){console.log()});
value = String([1,2,3,4,5])
value = (3.14).toString();
value = String(null);
console.log(value);

// Veri tiplerini sayiya cevirme

value = Number(123);
value = Number(null);
value = Number(true);
console.log(value);

let x;
value = Number(undefined); //NaN hatasi aliriz.
value = Number(""); //0 geliyor.
value = x; // undefined hatasi alinir
console.log(value);
value = Number("riza"); // NaN hatasi aliriz
value = Number(function(){console.log();})
value = Number([1,2,3]); //NaN Hatasi aliriz.
value = Number("3.14");

value = parseFloat("3.14");
value = parseInt("3.14");
console.log(value);
value = parseInt("3");
value = parseInt(3);
//
console.log(value);
console.log(typeof value);

// otomatik donusumler
let m = "4" + "riza"; //String cikti verir
m ="34" + 6 // String cikti verir
m = Number("34") + 65 //Number cikti verir

console.log(m);
console.log(typeof m);