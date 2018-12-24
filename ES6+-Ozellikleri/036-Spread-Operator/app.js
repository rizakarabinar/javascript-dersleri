// Spread Operator


// // Start : 
// const langs = ["java","css","html"];

// console.log(langs);

// // gelin langs ın tüm elemanlarını birer boşluklu olarak yazdıralım
// console.log(langs[0], langs[1], langs[2]);

// //Spread operatoru ile yazdıralım
// console.log(...langs);

// // ----------------------------------------

// // spread operatorsuz
// const langs2 = ["c#","pyton", langs[0], langs[1], langs[2]];
// console.log(...langs2);

// // spread operatörlü olarak 
// const langs3 = ["pl/sql","javascript",...langs2];
// console.log(langs3);

// ----------------------------------------

// Start :

const numbers = [1,0,2,4,3,7,4,6,5,8];

const[number1,number2,...numbers2] = numbers;

console.log(number1,number2);
console.log(numbers2);

const addNumbers = (a,b,c) => console.log(a+b+c);
addNumbers(2,3,4);

const numbers3 = [100,200,300];
// eski yontemle
addNumbers(numbers3[0],numbers3[1],numbers3[2]);

//spread operatörü ile
addNumbers(...numbers3);