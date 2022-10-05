document.querySelector("#btnConvertir").addEventListener("click", convertirTemp);

function convertirTemp(){
    let temp = Number(document.querySelector("#txtTemp").value);
    let tempF = convertir(temp);

    document.querySelector("#pRespuesta").innerHTML = tempF + "°F"
}

function convertir(tempC){
    return 1.8 * tempC + 32;
     
}