// Scope Kavrami // Bir degiskenin nerelerde kullanilabilecegini anlatir. JS 3 farkli kapsam barindirir.

//Global Scope, Function Scope, Block Scope

//Global Scope // Herhangi bir function yada if blogu icinde yer almayan yerde yapilmis genel tanimlar

var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1,value2,value3);



//////////////start 
//Function scope

// function xyzFunc(){
 
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);
// };

// xyzFunc();

//////////Start
if(true){
    var value1 = 70; // var ile let arasindaki farklaran biri de block icerisinde de tanimlanmis olsa var degiskeni her scope da gorulur.
    let value2 = 80;
    const value3 = 90;
    console.log(value1,value2,value3);
};

console.log(value1,value2,value3);