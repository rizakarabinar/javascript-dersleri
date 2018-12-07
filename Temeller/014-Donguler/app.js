// Donguler

//While dongusu
// let i = 0;

// while(i<3){
//     console.log(i);
//     i++; // i += 1; yada i = i + 1; seklinde de yaizlabilir.
// }


// let x = 3 ;
// while(x>0){
//     console.log(i);
//     x-- ; // x -= 1; yada x = x-- seklinde yazilabilir. //x = x -1
// }

//break ve continue

// let y = 0 ;

// while(y<10){
//     console.log(y);
//     if(y == 5) break;
//     y++;
// }


// let t = 0;

// while( t < 10 ){
    
//     if(t == 3 || t == 5){
//         t++; // koyulmazsa sonsuz dongu olusur.
//         continue;
//     }

//     console.log(t);
//     t++;
// }


// Do While donguleri

//En az bir defa calisma garantisi vardir // Once block calisir sonra kosul kontrol edilir.
// let i = 0;

// do{

//     console.log(i);
//     i ++;

// }while(i < 10);

//For donguleri

// const langs = ["pyton","css","html"];

// let index = 0 ;

// while(index < langs.length){

//     console.log(langs[index]);
//     index ++;
// }


////////////start
//Yukaridaki ornek yerine For kullanırsak nolur.

// const langs = ["pyton","css","html"];
// for(index = 0 ; index < langs.length ; index ++){
//     console.log(langs[index]);
// }


////////////start
// const langs = ["java","pl-sql","html"];

// langs.forEach(function(lang,index){
//     console.log(index, lang);
// });


////////////start
// const users = [ // Objelerden olusan bir dizi
//     {name : "riza", age: 13},
//     {name : "merve", age: 49},
//     {name : "hakan", age: 34}
// ];

// const names = users.map(function(user){ //Map fonksiyounu onemli
//     return user.name;
// });

// const ages = users.map(function(user){
//     return user.age;
// })

// names.forEach(function(name){ // for ieach call back fonksiyonuna ihtiyac duyar
//     console.log(name);
// });

// console.log(ages);
////////finish


////////////start

// For in dongusu

const user = {
    name : "riza",
    age : 34
};

for(let key in user){
    console.log(key, user[key]);
};




