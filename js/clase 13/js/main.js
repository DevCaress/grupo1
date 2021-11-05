

/* let animales = {
    color: 'azul',
    edad: 6,
    nombre: 'pugberto',
    raza: 'pug',
    tipo: 'perro'
}; */

/* function animales(tipo, raza, nombre, edad, color){

    let container = document.getElementsByTagName('body')[0];

    let element = document.createElement('div');

    element.innerHTML = `
        <p>color: ${color} </p>
        <p>tipo: ${tipo} </p>
        <p>raza: ${raza} </p>
        <p>nombre: ${nombre} </p>
        <p>edad: ${edad} </p>
    `;
    
    container.appendChild(element);
} */


function animales(tipo, raza, nombre, edad, color){

    this.tipo = tipo;
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;

    this.cambiarNombre = function(nuevoNombre){
        this.nombre = nuevoNombre;
    }


}


var animal1 = new animales('perro', 'pug', 'pugberto rodriguez', 6, 'azul');


console.log(animal1);