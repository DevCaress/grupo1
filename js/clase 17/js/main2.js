
let allUsers = null;

const getDataLocal = () => {
    const usuersLocal = localStorage.getItem('usuariosEnLocal');
    allUsers = JSON.parse(usuersLocal);
}

const sendDataLocal = () => {
    const allUserJson = JSON.stringify(allUsers);
    localStorage.setItem('usuariosEnLocal', allUserJson);
}

const createUser = (usuario, correo) => {
    const persona = {
        usuario: null,
        correo: null
    }

    persona.usuario = usuario;
    persona.correo = correo;

    allUsers.push(persona);
    sendDataLocal();
    uiUsuarios();

    console.log(persona);
    console.log(allUsers);
}


const uiUsuarios = () => {


    const container = document.getElementById('outputs');
    container.innerHTML = '';


    for (const perro of allUsers) {

        console.log(perro);
        const element = document.createElement('div');
        element.classList.add('usuario');

        element.innerHTML = `
        <p>${perro.usuario} <p>
        <p>${perro.correo} <p>
        `;

        container.appendChild(element);
    }

}


const submit = () => {
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;

    if (usuario != '' && correo != '') {

        createUser(usuario, correo);
        console.log(usuario, correo);

        document.getElementById('usuario').value = '';
        document.getElementById('correo').value = '';
    }

}

const initHome = () => {
    getDataLocal();
    if (allUsers != null) {
        uiUsuarios();
    }
}

document.getElementById('submit').addEventListener('click', submit);
window.onload = initHome();

