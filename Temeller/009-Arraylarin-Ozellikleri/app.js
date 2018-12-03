let value;

const numbers = [1,4,43,99,77,432,25];
// const number2 = new Array(1,2,3,4,5); //ustteki islemden hicbir farki yok. ustteki daha kolay

const langs = ["Java","Oracle","IBM","Css"];
const a = [1,"riza",-3,null,undefined,3.14];

value = numbers.length; //dizi uzunlugunu verir

value = numbers[2]; // indexleme stringler ile ayni
value = numbers[numbers.length-1];

// indexteki degeri degistirme
numbers[2] = 999;

value = numbers;

// Imdex of
value = numbers.indexOf(999);
value = numbers.indexOf(77); // -1 degeri bulamadiğini belirtir

//Array in sonuna eleman ekleme
numbers.push(3333);
value = numbers;

//array in basina eleman ekleme
numbers.unshift(1111);
value = numbers;

//array in sonundan deger cikarma
numbers.pop();
value = numbers;

//array in basindan deger cikarma
numbers.shift();
value = numbers;

//belli bir araligi cikarmak icin
numbers.splice(1,1); //Baslangic indexi ve kac adet cikarmak istedigimizi parametre olarak veriyoruz.
value = numbers;

//array imizi ters cevirmek icin kullaniyoruz.
numbers.reverse;
value = numbers;

// array imizi siralamak icin
value = numbers.sort();//string olarak degerlendirir ve oyle siralar

value = numbers.sort(function(x,y){ // kucukten buyuge siralamak icin
    return x - y ;
});

value = numbers.sort(function(x,y){ //buyukten kucuge siralamak icin
    return y-x;
})

console.log(value);