// !!! Projeye baslarken bilmelisiniz ki sıkıştığınız her an w3schools size doğruyu bulmanızda büyük bir yardımcıdır.


 // Önce tüm elementlerimizi seçelim
 const form = document.getElementById("todo-form");
 const todoInput = document.getElementById("todo");
 const todoList = document.querySelector(".list-group");
 const firstCardBody = document.querySelectorAll(".card-body")[0];
 const secondCardBody = document.querySelectorAll(".card-body")[1];
 const filterInput = document.querySelector("#filter");
 const clearBtn = document.querySelector("#clear-todos");

// Tum eventListener lari tek seferde atamak ve kod okunurluğunu kolaylaştırmak adına bir foksiyon yazalım.
eventListener();


function eventListener(){
    form.addEventListener("submit",addTodo); // submit sırasındaki event listener

}


function addTodo(e){
    const newTodo = todoInput.value.trim(); // Peki trim() ne işe yarar : Kodlamada yeni arkadaşlar için başında ve sonunda boşluklu girilen değerleri temiz olarak almıs aluruz
   
    // console.log(newTodo); // artik console a yazdırmak yerine element olarak ekranı çizmemiz gerekiyoer :)
    addTodoToUi(newTodo); // islerimizi oldukca fonksiyona bolmek lazım. eger tek bir is yapıyorsak function olarak ayirmaliyiz.

    e.preventDefault();
}


// gelen parametredeki string degeri Ui a ekleyerek ekrana cizecek.
function addTodoToUi(degisken1){

    /**
 *      <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->
 */
    // en alta yapilan yorum sonrasi if blogu eklenmistir. eklenmistir
    if(degisken1.length < 1){ // degisken === null seklinde kontrol yapıldı ama yemedi.

    }else{

        //list item olusturma
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";
        
        // link olusturma
        const link = document.createElement("a");
        link.className = "delete-item";
        link.href = "#";
        link.innerHTML = "<i class = 'fa fa-remove'></i>";
        
        // input alanina girdigimiz degeri listItem ımıza ekleme.
        listItem.textContent = degisken1 ;

        // olusturdugumuz linki list item a ekelem
        listItem.appendChild(link);


        // olusturdugumuz listItem ı ui'a yani todolist group elementine ekleme 
        todoList.appendChild(listItem);

        //ekleme islemimiz bittikten sonra alanı bosaltmakta fayda var :)
        todoInput.value = "";

        /**
         * dikkatli bir test sonrasi göreceksiniz ki input alanı boş bile olsa tuşa her basıldığında boş bir todo kaydı atıyor :) bunun da önüne geçelim ve if lerimizi ekleyelim.
         * 
         * ayrıca şimdilik sadece arayüze eklediğimizi, sayfanın her yenilendiğinde verilerin silindiğini farkedeceksiniz.
         */

        // console.log(listItem); // console.log sizin her daim yardımcınız olacak, dogru nesneyi secip secmedigimiz vs gibi konuları anlık görebilirsiniz.
        // console.log(link);
    }
}