var equis = 'a';

switch (equis) {

    case 0:
        document.write('Equis vale: ' + equis);
        break;

    case 1:
        document.write('Equis vale: ' + equis);
        break;

    case 2:
        document.write('Equis vale: ' + equis);
        break;

    default:
        /* document.write('Ingresa un valor valido'); */
        break;
}

/*bucles*/


for(let contador = 0; contador < 5; contador++){
    document.write('<img src="img/favicon.png" alt="">');
}

/* var contador = 0;

while( contador < 5 ){
    document.write('<img src="img/favicon.png" alt="">');
    contador ++;
} */

/* var contador = 90;

do {
    document.write('<img src="img/favicon.png" alt="">');
    contador++;
} while (contador < 5); */

/* for (let index = 0; index < 1; index++) {


    for (let index = 1; index <= 10; index++) {

        document.write('Hola mundo' + index + '<br>');

    }

} */

/* numero x numero */

var numero = prompt('Dame un numero');
numero++;

for (let index = 0; index < numero; index++) {
    
    
    for (let index2 = 0; index2 < index ; index2++) {
        
        document.write('☻');
        
    }

    document.write('<br>');
    
}



/* 






numero++;
var caritas = '';

for (let index = 0; index < numero; index++) {
    

    

    for (let index2 = 0; index2 < index; index2++) {
        
        caritas += '☻';
        
    }

    document.write(caritas + '<br>');
    caritas = '';
    
} */