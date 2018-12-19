// 
/**
 * Web gelistirici araclari icinde (f12 ile ulasiyorduk)
 * Element ve Console gibi Application kismi var
 * ve bu bolumde Storage lari görebilriz.
 * 
 * local storage ve session storage gibi iki bolum gorecegiz
 * 
 * bu iki storage arasındaki fark
 * local storage olan alan kisinin kendi cihazina kaydeilir ve browser kapatilsa bile kaydedilir.
 * session storage bolumu ise browser kapatıldıgında, yeni sekme acildiginda degerler kaybedilir ancak sayfa yenilendiginde degerlerin durdugunu gozlemleyelim.
 * ve goreceginiz gibi veri desini key, value seklindedir.
 * 
 * Daha onceden hazirladigimiz index.html ile canli ornekler deneyelim.
 */



//  // Start : window nesnemizi inceledigimizde gorecegimiz uzere localstorage ve sessionstorage in birer nesne olarak window nesnesinde oldugunu gorecegiz
//  console.log(window);

// Start : simdi sayfamizin elementlerini secelim


// Button lar

const add = document.querySelector("#add"); // id ile select icin # kullaniyorduk.
console.log(add);

const del = document.querySelector("#delete");
console.log(del);

const clear = document.querySelector("#clear");
console.log(clear);


// Input alanlarimizi alalim
const addkey = document.querySelector("#addkey");
console.log(addkey);

const addvalue = document.querySelector("#addvalue");
console.log(addvalue);

const deletekey = document.querySelector("#deletekey");
console.log(deletekey);

add.addEventListener("click",addItem); // aynı key degerine sahip bir deger daha eklemek istedigimizde, key degerinin eski value sunu kaybettigimizi goreceksinz
del.addEventListener("click", removeItem); // Anahtar alanina girilen degerin storage dan silinmesini bekleyecegiz
clear.addEventListener("click",clearAll); // tum session storage da girilen degerlerin silinmesini bekleyecegiz

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function removeItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearAll(e){
    sessionStorage.clear();
}