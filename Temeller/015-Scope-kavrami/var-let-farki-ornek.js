var database = "123456"; // Database sifresi olarak dusunebiliriz
/**
 * 
 * arada binlerce satir kod blogu olabilir, siz bilseniz bile beraber gelistirme yaptiginiz baska biri 
 * farkinda olmadan asagidaki islemi yapabilir. ve bu durumda ciddi sorunlar yasanacaktir.
 */


if(true){
    var database = "oracle"; // Bu halde direk tum scopelarda database degiskenin verisini update etmis olacagiz
    /**
     * iste tam da bu ve benzeri sebeplerden dolayi artik var nerdeyse hic kullanilmiyor, let ve const kullaniliyor
     */
}

console.log(database);