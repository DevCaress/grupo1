
const limpiarInput = () => {
    document.getElementsByTagName('input')[0].value = '';
}

const crearTarjeta = (nombre) => {
    const container = document.getElementsByClassName('row')[1];
    const element = document.createElement('div');
    element.classList.add('col-4');
    element.innerHTML = `
    
    <div class="card" style="width: 18rem;">
        <img src="img/wiwichu-a-merry-crisma.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" class="btn btn-primary">Editar</a>
            <a href="#" class="btn btn-danger">Eliminar</a>
        </div>
    </div>
    `;

    container.appendChild(element);
}

const informacion = () => {
    const nombre = document.getElementsByTagName('input')[0].value;
    crearTarjeta(nombre);
    limpiarInput();
    console.log(nombre);
}



const inicializar = () => {
    document.getElementById('añadir').addEventListener('click', informacion);
}

inicializar();