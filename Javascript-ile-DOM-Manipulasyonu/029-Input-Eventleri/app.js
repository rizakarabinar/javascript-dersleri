// START : Sayfa yuklemesi tamamlandiginda olusacak Event'tir. Cok isimize yarayacagini dusunuyorum
// document.addEventListener("DOMContentLoaded",function(e){
//     console.log("Sayfa yuklemesi tamamen bitti");
// });



// Start : Input Eventleri
const filter = document.getElementById("filter");


// Focus

filter.addEventListener("focus",focus);

function focus(e){
    console.log("focusss");
}


console.log(filter);