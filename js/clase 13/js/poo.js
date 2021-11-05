
let allTodos = [];
let counter = 0;

document.getElementById('btn').addEventListener('click', createTodo);

function todos(tarea){

    this.tarea = tarea;

}

function createTodo(){

    let value = document.getElementsByTagName('input')[0].value;
    

    if (value != '') {

        allTodos[counter] = new todos(value);
        document.getElementsByTagName('input')[0].value = '';
        uiTodos();
        counter++;
        console.log(counter);
        console.log(allTodos);
    }

}

function uiTodos(){


    let container = document.getElementById('todos')

    let element = document.createElement('div');

    element.innerHTML = `
        <p> ${allTodos[counter].tarea} </p>
    `;
    
    element.addEventListener('click',tacharTarea)

    container.appendChild(element);

}

function tacharTarea(){

    this.classList.toggle('tachado');
    console.log(this);

}