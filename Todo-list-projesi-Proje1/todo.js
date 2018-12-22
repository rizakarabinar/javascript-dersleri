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
    let mesaj = "";
    // Step2 : input alanında bir değer yoksa, Bilgilendime mesajlarını ekleyelim.
    if(newTodo === ""){

        // Arayüz olarak bootstrap 4 kullanıyoruz ve kendi alert mesajlarını internetten bir incelemeneizde fayda var.
        /**
         * https://v4-alpha.getbootstrap.com/components/alerts/
         */
        mesaj = "Lütfen bir todo girin.";
        showAlert("danger",mesaj); // tek bir function ile birden fazla durum için dinamik alert function u oluşturmak için parametre gönderelim
    }
    else{
        // console.log(newTodo); // artik console a yazdırmak yerine element olarak ekranı çizmemiz gerekiyoer :)
        addTodoToUi(newTodo); // islerimizi oldukca fonksiyona bolmek lazım. eger tek bir is yapıyorsak function olarak ayirmaliyiz.

        //Step 3 : todo muzu localstorage a yazacagiz
        addTodoToLocalStorage(newTodo);


        showAlert("success","Todo basarili bir şekilde eklendi"); // tek bir function ile birden fazla durum için dinamik alert function u oluşturmak için parametre gönderelim
    }


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
    // en alta yapilan yorum sonrasi if blogu eklenmistir. eklenmistir. ve 
    // if(degisken1 === ""){ // degisken === null seklinde kontrol yapıldı ama yemedi. degisken1.length <  1 de yapılabilir. 

    // }else{

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
         * dikkatli bir test sonrasi göreceksiniz ki input alanı boş bile olsa tuşa her basıldığında boş bir todo kaydı atıyor :) 
         * bunun da önüne geçelim ve if lerimizi ekleyelim. 
         * -- daha sonra if blogunu yorumlayarak aslında olması gerektiği gibi bilgilendirme mesajı nasıl verilir onu göreceğiz.
         * 
         * ayrıca şimdilik sadece arayüze eklediğimizi, sayfanın her yenilendiğinde verilerin silindiğini farkedeceksiniz.
         */

        // console.log(listItem); // console.log sizin her daim yardımcınız olacak, dogru nesneyi secip secmedigimiz vs gibi konuları anlık görebilirsiniz.
        // console.log(link);
    // }
}


// Bilgilendirme mesajları için gerekli function, unutmayın sadece tek bir iş yapan tüm parçaları ayırmak işimizi çok kolaylaştırır.
function showAlert(status, message){
    const alert = document.createElement("div");
    // alert.className = "alert alert-" + status; // bu bir yontemken bunun asıl olması gereken seklini asagida yazalım.
    alert.className = `alert alert-${status}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert); // 
    /**goreceksiniz ki sorunsuz bir sekilde calisiyor. Ancak ekranda devamlı kalıyor. Bunun devamlı kalması yerine belirli bir süre sonra kaybolmasını sağlayalıım.
     */

    // Window objemizin setTimeout function ını kullanabiliriz
    // window.setTimeout -- direk ana scope umuz window olduğu için tıpkı alert te yaptığımız gibi direk kullanabiliriz. Söyle ki :

    setTimeout(removeAlert,1000); // iki parametre alır, 1.si çalışacak function, 2.si ne kadar süre sonra çalışacağı. 1000 ms = 1 sn demektir.

    function removeAlert(){
        alert.remove();
    }
}


function addTodoToLocalStorage(newTodo){

    // // Start : 
    // let todos ;

    // if(localStorage.getItem("todos") === null){
    //     todos = [];
    // }else{
    //     todos = JSON.parse(localStorage.getItem("todos"));
    // }

    /**
     * yukarıda yorum satırı yapılan kalıbı çok fazla yerde kullanacağız. Tekrar tekrar yazmak yerine bir function haline getirip öyle kullanalım.
     */
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}


// Storage dan tum todo larımızı almıs olacak.
function getTodosFromStorage(){
    let todos ;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}