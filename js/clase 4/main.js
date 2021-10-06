/* var imagenes = []; */
"use strict"

var person = [];

var persona = 'Pedro';
var edad = 25;
var soltero = true;
var estatura = 1.75;


/* document.write(persona + '<br>');
document.write(edad + '<br>');
document.write(soltero + '<br>');
document.write(estatura + '<br><br>'); */


person = [ 'Pablito', 22, false, 1.80, 'Perez' ];



/* for (let index = 0; index < person.length; index++) {

    console.log(index);
    document.write(person[index] + '<br>');
    
} */


var imgs = [
    'DC-2',
    'dc_2',
    'dc',
    'hallowin',
    'NDC-2',
    'ndc',
    'wiwichu-a-merry-crisma',
];

/* for (let index = 0; index < imgs.length; index++) {
    
    var template = '<img src="img/' + imgs[index] + '.png" alt="">';

    document.write(template);
    
} */

var respuestas = [];

respuestas[0] = 'Caress';

respuestas[5] = 20;

var preguntas = [
    prompt("Cual es tu nombre?"),
    prompt("Cual es tu edad?"),
    prompt("Cual es tu sexo?"),
    prompt("Cual es tu estatura?"),
    prompt("Cual es tu peso?"),
];

var add =[
    "nombre? ",
    "edad? ",
    "sexo? ",
    "estatura? ",
    "peso? ",
]


for( let i = 0; i < preguntas.length ;i++){

   document.write("Cual es tu " + add[i] +   preguntas[i] + "<br/>" )

}

