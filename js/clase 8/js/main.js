
var dataNum = '';
var result = '';

function nums(dataNum){

    if(result === '0'){
        result = '';
    }

    result = result + dataNum;
    document.getElementById('screen').innerHTML = result;
}


function deleteAll(){

    result = '0';
    document.getElementById('screen').innerHTML = result;

}