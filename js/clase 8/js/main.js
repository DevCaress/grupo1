
var dataNum = '';
var screen = '';
var clicks = 0;
var result = '';
function nums(dataNum) {

    if (screen === '0') {
        screen = '';
    }

    screen = screen + dataNum;
    document.getElementById('screen').innerHTML = screen;

}


function deleteAll() {

    screen = '0';
    result = null;
    document.getElementById('screen').innerHTML = screen;

}


function operacion(op) {


    screen = parseFloat(screen);


    if (clicks == 0) {
        result = screen;
        console.log(screen);
    } else {
        switch (op) {
            case 1:
                result = result + screen;
                break;
    
            case 2:
                result = result - screen;
                break;
            case 3:
                result = result * screen;
                break;
            case 4:
                result = result / screen;
                break;
    
            default:
                break;
        }

        console.log(result);
    }

    screen = '0';
    document.getElementById('screen').innerHTML = screen;

    document.getElementById('screen').innerHTML = result;
    clicks++;
    console.log('clicks: ' + clicks);
}

function resultt(){
    if(result != ''){
        document.getElementById('screen').innerHTML = result;
    }
}