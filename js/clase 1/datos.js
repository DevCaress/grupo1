/*tipos de datos basicos*/


var numero = 10;
var decimal = 4;
var negativo = -500;

var caracter = 'c';
var nombre = 'caress';
var mensaje = 'Hola mundo!!!     <3';

var casado = true;
var viudo = false;


/*operadores matematicos*/

var suma = numero + decimal;
var resta = numero - decimal;
var multi = numero * decimal;
var division = numero / decimal;
var modulo = numero % decimal;
numero++;
decimal--;

var edad = 20;

/* console.log(--edad); */
/* console.log(edad--); */




/* operadores de asignacion*/
/*=*/
var equis2 = 5;
var equis = equis2;

/*+=*/

var disparo = 100;
var puntaje = 120;

puntaje += disparo;
puntaje = puntaje + disparo;

puntaje -= disparo;
puntaje = puntaje - disparo;

puntaje *= disparo;
puntaje = puntaje * disparo;

puntaje /= disparo;
puntaje = puntaje / disparo;

puntaje %= disparo;
puntaje = puntaje % disparo;


var intentos = 2;
var precio = 2;

precio *= intentos;



/*operadores de comparacion*/

var numero1 = 5;
var numero2 = 5;

numero1 > numero2;
numero1 < numero2;

numero1 >= numero2;
numero1 <= numero2;

numero1 == numero2;
numero1 === numero2;

numero1 != numero2;
numero1 !== numero2;




/*operadores logicos*/

/*
&&
*/

var contraseña = true;
var usuario = false;

contraseña && usuario;

contraseña || usuario;

!usuario;

/*operadores de cadena de texto*/

var user = 'Caress';
var msj = 'Bienvenido '

user + msj;
