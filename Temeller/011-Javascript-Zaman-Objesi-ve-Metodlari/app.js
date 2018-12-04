let value;

const now = new Date(); //suanki zamani almamizi saglyor
value = now;

//bir kac formatta tarih belirlenebilir.
const date1 = new Date("6-25-1975 15:10:20");
const date2 = new Date("June 25 1975");
const date3 = new Date("6/25/1975");

value = date1;
value = date1.getMonth();// Ocak 0 dan baslar
value = date1.getDate();//Gunlar 1 den baslar
value = date1.getDay();// Pazardan baslar ve 0 degeri verir
value = date1.getHours(); // saat bilgisini doner
value = date1.getMinutes();//dakika bilgisini doner
value = date1.getSeconds(); //Saniye bilgisini doner
value = date1.getMilliseconds();//Milissaniye cinsinden doner

date1.setMonth(1);
date1.setDate(8);
date1.setFullYear(1985);
date1.setHours(12);
date1.setMinutes(0);
date1.setMilliseconds(0);

value = date1;

console.log(value);