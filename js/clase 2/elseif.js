var edadUsuario = prompt('Cual es tu edad??');
/* var nombreUsuario = prompt('Cual es tu nombre??'); */

if (edadUsuario == 18) {

    alert('Felicidades apenas y puedes pasar :v');

}else if(edadUsuario > 18 && edadUsuario < 30){

    alert('Es mayor de 18 pero menor de 30');

}else if(edadUsuario >= 30){

    alert('Tienes 30 o más de 30');

}else{

    alert('Eres menor de edad');
    
}
