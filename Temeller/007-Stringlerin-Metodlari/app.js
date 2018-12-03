let value;

const ad = "riza";
const soyad = "karabinar";
const langs = "java,pyton,c++";

value = ad + soyad; // ad soyadı birlestirir
value = ad + " " + soyad;
value = "Riza Karabinar"; // tekrar tanimlayabiliriz.
value = "Bilge" + value ; // string string ile toplanabilir
value += "Bilge"; // value = value + "Bilge" demektir. yukardakiyle aynı degil !!! ;

value = ad + " " + soyad; // ad ve soyadı bir boslukla yan yanba yaar
value = ad.length;// ad degerinin uzunlugunu verecektir.
value = ad.concat(" ", soyad, " + ", langs) // ad ile bosluk,soyad ve langs i birlestirir
value = ad.toUpperCase(); // tum harfleri buyutur
value = soyad.toLowerCase(); // tum harfleri kucultur.

value = ad[0]; // baslangic harfini verecektir.
value = ad[3]; // 4.harfi verecektir.
value = ad[ad.length-1]; // son karakteri verir

// Index Of
value = ad.indexOf("r");// charset gibi dusunursek,dizinin kacinci indexi oldugunu verir
value = ad.indexOf("i");// charset gibi dusunursek,dizinin kacinci indexi oldugunu verir
value = ad.indexOf("R"); // -1 donerse eleman yok demektir.

//Char At
value = ad.charAt(1);// index in sahip oldugu harfi dondurur

//Split
value = langs.split(",");

//Replace
value = langs.replace("pyton","html"); //pyton u html ile degistirir

//Includes
value = langs.includes("Java");//Varsa true, yoksa false doner. Case sensitive calisir.
value = langs.includes("pyton");//Varsa true, yoksa false doner. True donme sebebi langs const olarak tanimli.


console.log(typeof value);
console.log(value);