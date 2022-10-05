document.querySelector("#btnConvertir").addEventListener("click", convertirTemp);

function convertirTemp(){
    let temp = Number(document.querySelector("#txtTemp").value);
    let tipo = document.querySelector("#slcTipoTemp").value;
    let tempFinal;

    switch(tipo){
        case "ce":
            tempFinal = convertirCe(temp);
            break;
        case "ke":
            tempFinal = convertirKe(temp);
            break;
        case "ra":
            tempFinal = convertirRa(temp);
            break;
        case "re":
            tempFinal = convertirRe(temp);
        break;
        
    }    

    document.querySelector("#pRespuesta").innerHTML = tempFinal;
}

function convertirCe(tempF){
    return (tempF - 32) / 1.8;
     
}
function convertirKe(tempF){
    return (tempF + 459.67)/1.8 ;
     
}
function convertirRa(tempF){
    return tempF + 459.67;
     
}
function convertirRe(tempF){
    return (tempF - 32) / 2.25;
     
}
