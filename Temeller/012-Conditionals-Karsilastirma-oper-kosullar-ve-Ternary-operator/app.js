/**
 * Karsilastirma operatorleri
 * 
 * == // iki degerin esitligini kontrol eder
 * === // degerlerle birlikte degisken tipi de kontrol eder
 * != // esit degildir mi
 * !== ne degisken tipi esit , ne de deger olarak esit
 * >  // Buyuktur
 * < // kucuktur
 * >= // Buyuk veya esittir
 * <= // kucuk veya esittir
 */

console.log(2==2);
console.log("js" == "java");

console.log(2 == "2"); // ikisinide string olarak karsilastirir
console.log(2 === "2"); // degerlerle birlikte tipi de kontrol eder
console.log(4>2);
console.log(4<2);

console.log(2 != 9 );

console.log(4 >= 2);
console.log(2 >= 2);

console.log(2 <= 4 );


//Mantiksal operatorler

//Not operatoru -- sonucu tersine cevirir
console.log(!(2==2)); //false
console.log(!(2!=2)); //true

//and operatoru -- &&
console.log( (4 ==2 ) && ("ahmet" == "ahmet") );

// or operatoru -- ||
console.log( (4==2) || ("Ahmet" == "Ahmet"));


//Kosul durumu

// If, else if , else
const error = true;

if(error == true){
    console.log("kosul dogrudur/ Hata var!.");
}else{
    console.log("devam./ Hata yok");
}

const user = "rk";

if(user === "rk"){
    console.log("kullanici dogrudur.")
}else{
    console.log("kullanici yok");
}

const process = "1";
if(process === "1"){
    console.log("process degeri 1");
}else if(process === "2"){
    console.log("process degeri 2");
}else if (process ==="3"){
    console.log("process degeri 3");
}else{
    console.log("process degeri gecersizdir.");
}


const number = 13;

if(number == 3){
    console.log("sayi 3 e esittir.")
}else{
    console.log("sayi 3 degildir.");
}

//aynisini Ternary operator kullanarak daha kısa yazabiliriz
console.log(number===13 ? "sayi 13 e esittir" : "sayi 13 degildir");

//Tek satirlik islemler asagidaki gibi de kullanilabilir.
if(number === 13) console.log("sayi 13");
else console.log("sayi 13 degil.");


//Swich case

const process2 = 2;

switch(process2){
    case 1 :
        console.log("islem 1");
        break; // eger kullanilmaz ise break gorene kadar tüm case lere girer
    case 2 :
        console.log("islem 2");
        break;
    case 3:
        console.log("islem 3");
        break;
    default :
        console.log("gecersiz islem");
        break;//Yazilsa da olur yazilmasa da olur.
}