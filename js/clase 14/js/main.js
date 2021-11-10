
/* for (let index = 0; index < document.getElementsByTagName('span').length; index++) {
    
    document.getElementsByTagName('span')[index].addEventListener('click', mensaje);
    
} */
/* for (let index = 0; index < document.getElementsByTagName('span').length; index++) {
    
    document.getElementsByTagName('span')[index].addEventListener('click', mensaje);
    
} */


function mensaje() {

    /*  if(event.target.tagName == 'MAIN'){
         event.target.style.backgroundColor = 'pink';
     } */

    /*  if (event.target.tagName == 'SPAN' || event.target.tagName == 'DIV') {
         console.log('no diste click en el main');
     }else{
         event.target.style.backgroundColor = 'pink';
     } */
    /* event.target.children[3].style.backgroundColor = 'pink'; */
    console.log(event)
}

let personaje = document.getElementById('char');
let y = 0;
let x = 0;
let velocidad = 10;

const keyDown = () => {


    switch (event.key) {
        case 'ArrowUp':
            y -= velocidad;
            personaje.style.top = y + 'px';
            break;
        case 'ArrowLeft':
            x -= velocidad;
            personaje.style.left = x + 'px';
            break;
        case 'ArrowRight':
            x += velocidad;
            personaje.style.left = x + 'px';
            break;
        case 'ArrowDown':
            y += velocidad;
            personaje.style.top = y + 'px';
            break;

        default:
            console.log('Tas pendejo o que? >:v');
            break;
    }


    console.log(event.key);
}



document.addEventListener('keydown', keyDown);


