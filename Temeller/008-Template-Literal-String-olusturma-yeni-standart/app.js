const name = "riza";
const department = "it";
const salary = 5000;

const x = "isim : " + name + "\n" + "Department : " + department +  "\n" + "maas : " + salary;
const y = `isim :${name}\nDepartment :${department}\nMaas :${salary}`;//Backtick altgr+noktalivirgul ile bu kullanim yukarıdaki sonucu verird

const html = "<ul> "+
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";

document.body.innerHTML = html;

const html2 = `
                <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10/5}</li>
                <li>${sayHi()}</li>
                </ul>
              `;
     
/**
 * html ve html2 ayni sonucu veriyor ama yazimi cok daha kolay
 * icinde javascript kodu, fonksiiyon vs kullanılabiliyor.
 */
         
function sayHi(){// literal tipinin icinde kullanilabildigini gostermek icin sonradan yazildi.
    return "hi";
}

document.body.innerHTML = html2;

console.log(x);// islemlerin basinda eklenirse daha kolay oluyor
console.log(y);// islemlerin basinda eklenirse daha kolay oluyor