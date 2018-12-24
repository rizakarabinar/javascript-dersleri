// Destructing


// // Start : 

// // ES6 oncesi
// let number1,number2;

// arr = [1,2,3,4]; // degiskeni tanimlamadan kullandık.
// // console.log(typeof(arr));

// number1 = arr[0];
// number2 = arr[1];

// console.log(number1,number2);


// // ES6 Sonrasi
// let number3,number4;
// arr2 = [100,200,300,400];
// [number3,number4] = arr2 ;
// console.log(number3,number4);

// // ayni zamanda
// const [number5,number6] = arr; // tek satırda degiskenlerimizi tanımladık ve dizi değerlerini aldık.
// console.log(number5,number6);

//-------------------------------------------------------

// Obje destructing
// // Start : 

// const numbers = {
//     a : 10,
//     b : 20,
//     c : 30,
//     d : 40,
//     e : 50
// }

// console.log(numbers);

// const {number1,number2,number3} = numbers; // dizilerde [] kullanmıştık obje olduğu için {} kullanacağız.
// console.log(number1,number2,number3); 
// // goreceginiz gibi sonuclar ekrana undefined olarak basildi. Neden çünkü eşleştirme yapamıyor.
// // Bunun için objenin property leri ile değişkenlerimiz birebir aynı olmalı:

// const{a,d,e} = numbers;
// console.log(a,d,e) // göreceğiniz gibi sonuç geldi.

// // illaki başka isimde değişkenlere almamız gerekiyor ise
// const{a:number7,d:number8,e:number9} = numbers;
// console.log(number7,number8,number9) ;// göreceğiniz gibi sonuç yine  geldi.

//-------------------------------------------------------

// Function Destructing

// Start :

const getLangs = () => { return ["java","sql","html"]};

const [lang1,lang2] = getLangs(); // 0 ve 1. indexteki degerleri alacağız.
console.log(lang1,lang2);


// Obje

const person = {
    firstName : "riza",
    sirName : "karabinar",
    age : 33 ,
    showInfos : () => console.log("info")
}


const{firstName:isim,sirName:soyad,age:yas,showInfos:bilgileriGoster} = person ;
console.log(isim,soyad,yas); // property ler boyle gosterilebilir.
bilgileriGoster(); // objenin sahip oldugu function da böyle kullanılır.