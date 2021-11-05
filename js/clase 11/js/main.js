var url = 'https://pokeapi.co/api/v2/pokemon/';
var container = document.getElementById('app');
var inicio = 1;
var final = 20;
pokemones();
createPagination();

function pokemones(){

    for (let index = inicio; index <= final; index++) {

        fetch(url + index)
            .then(response => response.json())
            .then(data => {
                /* console.log(data); */
                var element = document.createElement('div');
                element.classList.add('card');
                element.innerHTML = `
                
                    <img src="${data.sprites.front_shiny}" alt="" class="img">
                    <p class="name">${data.name} </p> 
                    <p class="id"> id: ${data.id} </p> 
                    <p class="types"> ${data.types[0].type.name} </p> 
                
                `;
    
                container.appendChild(element);
        });
    
    }
}


function createPagination(){
    var btns = ['before', 'next'];
    
    for (let index = 0; index < 2; index++) {
        var element2 = document.createElement('div');
        element2.innerHTML = btns[index];
        element2.id = btns[index];
        document.getElementsByTagName('footer')[0].appendChild(element2);

        if (index == 0) {
            element2.addEventListener('click',before);
        }else{
            element2.addEventListener('click',next);
        }
    }
}

function before(){
    console.log('before');
}

function next(){

    container.innerHTML = '';  
    inicio = inicio + 20;
    final = final + 20;
    pokemones();
   
}

