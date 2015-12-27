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

    // Step 4 : Sayfamiz yuklendiginde localstorage a kaydettigimiz todo ları geri yukleyelim.
    document.addEventListener("DOMContentLoaded", loadAllTodosToUi);

    // Step 5 : Todoların tek tek silinmesi icin
    secondCardBody.addEventListener("click",deleteTodo);


    // Step 7 Filtreleme islemi yapacagiz.
    filterInput.addEventListener("keyup", filterTodos);

    // Step 8 : Tüm tasklari temizleme işlemi
    clearBtn.addEventListener("click", clearAllTodos);

}

// Step 8 için oluşturuldu.
function clearAllTodos(){

    // kullanicinin hata yapmamasi adina ilk once emin misin diye soralım 
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){

        
        // 1-  once arayuzden todoları kaldırmalıyız.
        // console.log("x");
        // todoList.innerHTML = ""; // kesinlikle calisir ancak daha hızlı bir yontem var :)

        console.log(todoList.firstElementChild); 
        /**
         * li leri alabildigimizi gordugumuze gore. first element child larimizi remove edelim.
         * first element child boş ise null olarak döndüğünü görebilirsiniz. */ 

         // şu halde :

         while(todoList.firstElementChild != null){
             todoList.removeChild(todoList.firstElementChild); // daha uzun bile gorunse, buyuk projelerde daha hızlı olacaktır. kücuk projelerde yukarıdaki de tercih edilebilri.
         }


         // 2-  local storage dan temizlemek gerek.
         localStorage.removeItem("todos");

         showAlert("info","tüm todolar temizlendi");
    }
}

// Step 7 : filtreleme islemleri icin.
function filterTodos(e){
    // console.log(e.target.value); // once eventimizin nerde oldugunu gorelim.

    const filterValue = e.target.value.toLowerCase(); // kucuk buyuk harf duyarliligini ortadan kaldirmak icin bu yolu izliyoruz.

    const todoList = document.querySelectorAll(".list-group-item.d-flex.justify-content-between");

    todoList.forEach(function(todo){
        const text = todo.textContent.toLowerCase(); // case senstive yapmak için bu yolu izliyoruz.
        if(text.indexOf(filterValue) === -1){
            // Bulunamadigi durumda
            todo.setAttribute("style","display : none"); // bootstap in d-flex classi display ozelligini block olarak sabitler.
            todo.setAttribute("style","display : none !important"); // yukarıdaki sorunu ortadan kaldırmak icin important anahtar kelimesini kullanacagiz.- css detay bilgisi-
        }else{
            todo.setAttribute("style","display : block");
        }
    })
    
}

function addTodo (e) {
    const newTodo = todoInput.value.trim(); // Peki trim() ne işe yarar : Kodlamada yeni arkadaşlar için başında ve sonunda boşluklu girilen değerleri temiz olarak almıs aluruz
    let mesaj = "";

    // Step2 : input alanında bir değer yoksa, Bilgilendime mesajlarını ekleyelim.
    if(newTodo === ""){

        // Arayüz olarak bootstrap 4 kullanıyoruz ve kendi alert mesajlarını internetten bir incelemeneizde fayda var.
        /**
         * https://v4-alpha.getbootstrap.com/components/alerts/
         */
        mesaj = "Lütfen bir todo girin.";
        showAlert("danger", mesaj); // tek bir function ile birden fazla durum için dinamik alert function u oluşturmak için parametre gönderelim
    } else {

        // Step 8 : Var olan bir todo yu listeye tekrar eklememek :
        const isTodoInListValue = isTodoInList(newTodo);
        console.log(isTodoInListValue);
        
        if(isTodoInListValue === false){
            
            // console.log(newTodo); // artik console a yazdırmak yerine element olarak ekranı çizmemiz gerekiyoer :)
            addTodoToUi(newTodo); // islerimizi oldukca fonksiyona bolmek lazım. eger tek bir is yapıyorsak function olarak ayirmaliyiz.
            
            //Step 3 : todo muzu localstorage a yazacagiz
            addTodoToLocalStorage(newTodo);
            
            
            showAlert("success","Todo basarili bir şekilde eklendi"); // tek bir function ile birden fazla durum için dinamik alert function u oluşturmak için parametre gönderelim
        }else{
            // console.log(isTodoInListValue);
            showAlert("info","Todo listemizde zaten vardır.");
        }
    }


    e.preventDefault();
}

// Step 8 :
function isTodoInList(searchtodo){
    let returnVal = false;
    const todoList2 = document.querySelectorAll(".list-group-item");
    console.log(todoList2);
    
    // for(i = 0 ; i < todoList2.length ; i ++){
    //     if(todoList2[i].textContent === searchtodo){
    //         returnVal = true;
    //         break;
    //     }
    // }

    // Foreach hata veriyor !!!!
    todoList2.forEach(function(t){
        // console.log(t);
        if(t.textContent === searchtodo){
                returnVal = true;
                return returnVal;
        }
    });

    return returnVal ;
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

    return todos.sort(); // Alfabetik sıralı gelmesi icin yapıldı.
}


function loadAllTodosToUi(){
    // let todos = JSON.parse(localStorage.getItem("todos")); // seklinde yazabilirsiniz ancak bu sizi(eger localstorage ınızı temizlemediyseniz yanıltır.) Temizleyip tekrar deneyin :)
    let todos = getTodosFromStorage();

    // for(i = 0 ; i < todos.length ; i ++){
    //     addTodoToUi(todos[i]);
    // }

    // for kullanmak yerine foreach kullanarak asagidaki gibi de yazabilecegimizi zaten ogrenmistik.
    todos.forEach(function(todo) {
        addTodoToUi(todo);
    });
}

function deleteTodo(e){
    // console.log(e.target); // dogru element i bulmamıza yardımcı olacaktır. göreceğiniz gibi listener ın çalışması gereken tek yer fa fa-remove class ına sahip olunan elementtir.
    
    if(e.target.className === "fa fa-remove"){
        /**
         * <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->
         */
        // boyle bir elemente sahip oldugumuzu dusunuyoruz.

        // li yi silmem gerektigi icin iki derece yukarıya cıkarak ilgili islemi yapacagiz

        e.target.parentElement.parentElement.remove();
        showAlert("success","silme işlemi başarıyla gerçekleştirildi"); 
        /**
         * ancak göreceksiniz ki localstorage dan silme işlemini yapmadık. şimdi sıra ona geldi.
         * şimdilik sadece arayüzden kaldırdık. Sayfa yüklendiğinde değerler geri gelecektir.
         *  */// 


         // Step 6 : Local storage dan silmek : tabiki dogru olan showAlert islemini tum silme islemi tamamlandiginda cagirmak gerekiyor.
         deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

    }
}

// Step 6 : todo nun localstorge dan silinmesi
function deleteTodoFromStorage(deletedTodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if( deletedTodo === todo)
           todos.splice(index,1); // metodu unutmuş olmayı dert etmeyin, google it!!!
    })

    localStorage.setItem("todos",JSON.stringify(todos));

}
