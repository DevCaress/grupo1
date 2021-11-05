
const btn = document.getElementById('btn');

const addTxt = () => {
    const container = document.getElementById('sec2');
    let value = document.getElementsByTagName('input')[0].value;

    if (value != '') {
        const element = document.createElement('div');
        element.innerHTML = value;
        container.appendChild(element);
        document.getElementsByTagName('input')[0].value = '';
    }
}

btn.addEventListener('click', addTxt);