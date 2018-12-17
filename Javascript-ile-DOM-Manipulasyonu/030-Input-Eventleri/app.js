// Start : Input Eventleri
const filter = document.getElementById("filter");


// Focus
// Bir element secildiginde, input alani oldugu icin alana girildiginde calisir.
filter.addEventListener("focus",run);

function run(e){
    console.log("focus Eventi calisti" , e.type);
}

// Blur 
// focuslanmadan cikildiginda calisir.
filter.addEventListener("blur",run); // run function unun once veya sonra olusturulmasinda bir fark olmadigini da gormus olduk.


// Copy - Paste Eventleri
// Once paste eventini gorelim: sonuc aldigimizi mantigimiza daha kolay oturtururz diye dusunuyorum.

// paste
filter.addEventListener("paste",run); // copyaladigimiz bir degeri filter elementine ctrl+v yada sag tik yardimi ile yapistirdigimizda event i goreceksiniz.

// copy
filter.addEventListener("copy",run); // yapistirdigimiz degeri tekrar kopyaladigimizca(ctrl+c yada sag tik ile) eventi izleyebiliriz.

// cut
filter.addEventListener("cut",run); 
/**
 * element icerisindeyken, deger olmasa bile (ctrl + x) cut yaparsak, eventi izleyebiliriz.
 * Bu durum bize event olussa bile bosa olusmus olabilecegini gosterir. Dikkat etmeliyiz.
 *  */

// Select 
// Mouse ile secerken secme isi tamamlandiginda calisir, ctrl + a yada ctrl + left/right durumlarini da inceleyiniz.
filter.addEventListener("select",run);

// delete
filter.addEventListener("delete",run);


// console.log(filter);