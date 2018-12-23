// START : 

// Normalde
const merhaba = function(){
    console.log("merhaba");
}

merhaba();


// Arrow Function yöntemiyle.

// basicly
const merhaba2 = ()=>{
    console.log("arrow function ile merhaba");
}

merhaba2();

// tek parametreli

const merhaba3 = (firstName) => { 
    console.log("merhaba",firstName);
}

merhaba3("Riza");

//eger tek parametreli ise function parametrelerini kullanmak zorunda değiliz. 
// eger 1 den fazla yada az parametre kullanacaksak () kullanmak zorundayız
// hatta tek bir işlem yapıyorsa süslü parantezleri de kullanmak zorunda değiliz.
// yani :
const merhaba4 = firstName => console.log("merhaba",firstName);
merhaba4("Rıza");


// // Start : 
// ayni sekilde tek bir islem yapıyor ve return islemi yapıyorsak return anahtar kelimesine de ihtiyaç yok: 

// normalde olan
const cube = function(x){
    return x * x * x;
}
console.log(cube(3));

// arrow function ile ne kadar kısa olabileceğine bakalım.
const cube2 = x => x * x * x ;
console.log(cube2(4));