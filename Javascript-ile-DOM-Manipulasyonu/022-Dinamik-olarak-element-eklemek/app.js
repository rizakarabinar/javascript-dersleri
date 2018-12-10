// Yeni element olusturma
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 

const newLink = document.createElement("a"); // yeni elementimiz

const cardbody = document.querySelector(".card-body:nth-child(3)");


newLink.id = "clear-todos";
newLink.className = "btn btn-success";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";
// newLink.textContent = "Farkli Sayfaya git"; // guvenlik anlaminda dogru degil. Asagida testi yapildi
newLink.appendChild(document.createTextNode("Farkli Sayfaya Git"));

cardbody.appendChild(newLink);

// Start : 
//Text Content 
// cardbody.textContent = "newLink"; //tum iceirgi silip son yazilani yazar


// Start : 
// Text Node
// const txtNode = document.createTextNode("naber"); // Boyle yapilirsa gorulecegi uzere en sona saglikli bir text eklenmis olur
// cardbody.appendChild(txtNode);




console.log(newLink);