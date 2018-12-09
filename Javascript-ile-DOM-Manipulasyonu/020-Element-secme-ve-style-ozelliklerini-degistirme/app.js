const element = document.querySelector("#clear-todos"); //Tum tasklari temizleyin butonunu sectik


//Element imizin ozellikleri

//Start
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent); // sadece yazilari(text) alacaktir
// console.log(element.innerHTML); // icinde htmller varsa onlari da almak istedigimizi soyler
// console.log(element.href);
console.log(element.style); // Css ozelliklerini verir


// Style ve Element ozelliklerini degistirme
//Start
// element.className = "btn btn-primary"; // boot strap kullanildigi icin bootstrap style larindan seciyoruz
// /**
//  * btn-success
//  * btn-warning
//  * btn-danger
//  * btn-primary
//  */

//  element.style.color = "#000"; // Buton rengini siyah yaptik

//  element.style.marginLeft = "100px"; // Butonumuzu soldan 100 px uzaklastirdik.

//  element.href = "http://www.google.com.tr"; // # olan degeri degistirdik. ama sayfa kendi ustunde acilyor....
//  element.target = "_blank"; // yeni sayfada acmasi icin bu ozelligi vermek gerekiyor
// element.textContent= "Sil"; // "Tüm Tasklari Temizleyin" yazisini "Sil" ile degistirdik.

// element.textContent = "<span>Silin</span>"; // sonuc olarak goreceksiniz ki tag lere text olarak davraniyor

// element.innerHTML = "<span style = 'color:yellow'>Siliniz</span>"; // HTML iceren kodlarda bunu kullanacagiz



// Start
// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){
//     el.style.backgroundColor = "blue";
//     el.style.color = "yellow";
// });


//Start : Diyelim ki Todo 2 ve 4 u ele almak istiyoruz
/**
 * w3 schools u kullanmaktan imtina etmeyin. child selector seklinde aratabiliriz.
 */

let element2;

element2 = document.querySelector("li"); //ilk li yi getirecektir.
element2 = document.querySelector("li:last-child"); // son li yi getirecektir
element2 = document.querySelector("li:nth-child(2)");// 2.cocugu almak icin kullanilmasi yeterli
element2 = document.querySelector("li:nth-child(3)");// 3.cocugu almak icin kullanilmasi yeterli
element2 = document.querySelectorAll("li:nth-child(odd)"); // tek sayili child lari getirir
element2 = document.querySelectorAll("li:nth-child(even)"); // cift sayili child lari getirir

element2.forEach(function(e2){
    e2.style.background = "#ccc";
    e2.style.color = "red";
})


console.log(element2);


// console.log(elements);