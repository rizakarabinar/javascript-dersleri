let value;

const developer = {
    name : "riza",
    age : 25,
    email : "rizakarabinar@gmail.com",
    langs : ["javascript","java","html"],
    adres : { //objenin sahip oldugu bir ozellik, ama kendi de bir obje.
        city : "Ankara",
        street : "bahcelievler"
    },

    work : function(){ // objenin sahip oldugu bir yetenek ama kendi de bir obje
        console.log("Calisiliyor.")
    }
}

value = developer;

//objenin property lerine erisim sekli
value = developer.email;
valeu = developer["email"];

value = developer.langs;
value = developer.adres.city;

//developer ozelligini bu sekilde cagiriyoruz.
value = developer.work();

//Object literal ile bir dizi
developers = [
    {name:"bilge", age:35},
    {name: "merve", age: 29}
];

value  = developers;
value = developers[0].name;

console.log(value);