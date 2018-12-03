let value;

const x = 5;
const y = 3;

//Aritmetik Operatorler
value = x + y ;
value = x - y ;
value = x * y ;
value = x / y ;
value = x % y;

value = Math.PI;
value = Math.E;

value = Math.round(value);

//Yukari yuvarlamak icin
value = Math.ceil(3.1);
value = Math.ceil(3.9);
//Asagi yuvarlamak icin
value = Math.floor(3.7);
value = Math.floor(3.1);

//Karekok
value = Math.sqrt(25);

//Mutlak deger
value = Math.abs(-9);

//us alma
value = Math.pow(2,4);

// max ve min
let ax = [1,5,99,66,4,0,2];
value = Math.min(1,5,99,33,0 );
value = Math.max(1,5,99,33,0 );

// value = Math.min(ax); // Bu neden degil ??????

value = Math.random() ; // 0(inclusive) ile 1(exclusive) arasinda deger uretir
value = Math.floor(Math.random() * 100) ; // 0 ile 100 arasinda deger uretir
value = Math.floor(Math.random() * 100 + 1) ; // 1 ile 100 arasinda deger uretir

console.log(value);
console.log(typeof value);