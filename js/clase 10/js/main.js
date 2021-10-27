
window.addEventListener('load', main);


var element = document.getElementById('main').children[0];

function main() {

    
    element.addEventListener('click', clic);
    gato()
}


function clic() {
    console.log('Hiciste click');
    element.style.backgroundColor = 'pink';
}

function dblClic() {
    console.log('Hiciste doble clic');
    element.style.backgroundColor = 'red';
}

function onOver(){
    console.log('over');
}

function onOut(){
    console.log('Out');
}

function onUp(){
    console.log('Up');
}

function onContext(){
    console.log('Context');
}

function onWheel(){
    console.log('Wheel');
}
/* function onMove(){
    console.log('Move');
} */

function onLeave(){
    console.log('leave');
}

function onEnter(){
    console.log('enter');
}
/* debugger */
/* setTimeout(gato, 5000); */


function gato() {
    document.getElementsByTagName('h1')[0].innerText = 'Gato :3';
}
/* gato(); */


