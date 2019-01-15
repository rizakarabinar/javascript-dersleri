// Statik Metodlar

class Matematik {

    cube(x){
        console.log(x*x*x);
    }
}

const math = new Matematik();
console.log(math); // Console dan Inceleyelim lütfen
math.cube(5); // Su durumda obje olusturmadan cube function imi kullanamiyorum. Peki kullanmak istersek :


class Matematik2 {

    static cube(x){
        console.log(x*x*x);
    }

    square(x){
        console.log(x*x);
    }
}

Matematik2.cube(7); // gordugumuz gibi static anahtar kelimesi olan metodlar instance olusmasini beklemiyor.
// Matematik.cube(8); // inceleyip aldigimiz hatayi gorun lütfen.


// Peki diyelim ki obje uzerinden kullanmayi deneyelim:

const math2 = new Matematik2();

console.log(math2); 
/** goreceginiz gibi cube functionimiz, __proto__ nun icinde yer almiyor. Bu tum static function lar icin boyledir.
static functionlar sadece sinif uzerinden cagirilirlar.


Ornek olarak Matematik2 class imiza bir function daha ekleyecegim. ve onun da direk sınıf uzerinden kullanamadigimizi inceleyin lutfen.*/

math2.square(99);
// Matematik2.square(); goreceginiz gibi cube function i gibi kullanamiyoruz, yada cube function ini square gibi

/**
 * static functionlara ornek -daha onceki derslerde kullandigimiz bir iki tanesi- : Object.create() gibi Math.sqrt(9) gibi
 */