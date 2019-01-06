 // For in : internette de javascript for in/of şeklinde arama yaptığınızda da dökümanlara ulaşabilirisniz


 // Start Önce, daha sonra kullanılmak üzere tanımlarımızı yapalım.
const person = {
    name : "Riza Karabinar",
    age : 32,
    salary : 3000
}

const langs = ["java","html","css", "python"];

const name = "Riza";


// // Start :
// // # Object
// for(let p in person){
//     console.log(p); // property lerin dondugunu gorecegiz.
//     console.log(person[p]); // Degerleri almak icin bu yolu kullanabiliyoruz.
// }

// // # Array
// for(let index in langs){
//     console.log(index); // index değeri döndürür
//     console.log(langs[index]); // değerleri almak için bu yolu kullanmalıyız.
// }

// // # String

// for(let c in name){
//     console.log(c); // goreceginiz gibi dizilerle aynı yani index degerini verir.
//     console.log(name[c]); // degeri almak icin böyle kullanıyoruz.
// }


//-----------

// For of
// Handikapımız objelerde kullanamıyoruz!!!.  Sadece dizilerin üzerinde kullanabiliyoruz.
// Start :


// # Object
// for(let p of person){
//     console.log(p);
// }

// #Array
for(let value of langs){
    console.log(value); // goreceginiz gibi direk degerlere erişebiliyoruz.
}

// #String
for(let c of name){
    console.log(c); // karakterler üzerinde gezebildiğimizi görebiliyoruz.
}

// MAPS ve SET ornekleri bu dosyada yok bir sonraki dosyada bulabilirsiniz