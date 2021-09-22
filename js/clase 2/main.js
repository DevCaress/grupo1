/* document.write('Hola Mundo! <3 '); */

var loquesea1 = 21;
var loquesea2 = 20;

/* if (loquesea1 >= loquesea2) {

    if(loquesea1 == loquesea2){

        document.write('Son iguales');

    }else{

        document.write(loquesea1 + ' es mayor que ' + loquesea2);

    }

}else{

    document.write(loquesea1 + ' es menor que ' + loquesea2);

} */

/*los datos en la BD*/
var pass = 'caress1234';
var user = 'Caress7u7';

/*datos dados por el usuario*/
var pass2 = 'caress1234';
var user2 = 'Caress7u7';

/* 
if ((pass2 == pass) && (user2 == user)) {
    document.write('Bienvenido!!! <3 ');
}else{
    document.write('La contraseña o el usuario son incorrectos');
} */

/*los datos en la BD*/
var soltero = false;
var dinero = true;
var hombre = false;

/* if ( soltero || dinero && hombre ) {

    document.write('Hiciste Match');

}else{

    document.write('No porque eres feo y pobre >:v');

} */

/* alert('Hola'); */

/* var nombre = prompt('Cual es tu nombre?');

alert(nombre); */

var ejercicio1 = `
-Preguntar el nombre
-Preguntar tu edad

-Te da un mensaje de bienvenido como este: 
Bienvenido "Pedro", que bueno que eres milenial

-Si es menor de edad, "Pedro" no puedes entrar, porque eres menor
-Si tiene 18, "Pedro" apenas y pudiste xd
-SI es menor de 30, "Pedro" ya eres boomer
-Si es mayor de 30, "Pedro" ya estas bien ruco
`;


/*ejercicio 1*/

var edadUsuario = prompt('Cual es tu edad??');
var nombreUsuario = prompt('Cual es tu nombre??');

if (edadUsuario >= 18) {

    if (edadUsuario == 18) {
        alert(nombreUsuario + ' Apenas y cumpliste con la edad');
    } else {

        if (edadUsuario <= 30) {
            alert('Tienes entre 19 y 30 años');
        } else {
            alert('Tienes mas de 30 años');
        }

    }


} else {
    alert(nombreUsuario + ' eres menor de edad');
}