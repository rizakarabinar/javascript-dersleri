// window object

// console.log(this);

//Document Object

// console.log(this.document); // window objesinin icinde oldugu icin, this.document yerine; direk document olarak kullanlılabilir. this.alert de de ayni durum vardi hatirlarsak.

//start
let value ;

value = document;
value = document.all;
value = document.all.length; //kac element imiz oldugunu gorebilriz
value = document.all[0];
value = document.all[document.all.length - 1];

const elements = document.all;

// console.log(elements);

// for(i = 0 ; i < elements.length ; i++){
//     console.log(elements[i]);
// }

elements.forEach(function(element){
    console.log(element);
});

// console.log(value);


