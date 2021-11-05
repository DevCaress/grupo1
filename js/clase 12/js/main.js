

/* let numero2 = 40;
const numero3 = 50;

let equis1 = 20;

if (equis1 > 10) {
    
    let equis1 = 50;

    if (equis1 > 40) {
        console.log(equis1);
    }

    

}

console.log(equis1);
 */


let name = 'Pedro';
let number1 = 20;
let number2 = 30;
let msg = `Hola mundo ${name} ${number1 * number2}`;

/* document.write(msg); */

let numbers = [1, 2, 3, 4, 5];
/* for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
} */



let person = {
    age: 25,
    name: 'Juanita',
    color: 'Blue'
};

for (const val of name) {
    /* console.log(val); */
}

for (const key in person) {

    const element = person[key];
    /* console.log(key +':' +element); */

}