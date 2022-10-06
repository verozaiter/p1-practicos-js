document.querySelector("#btnContar").addEventListener("click", contar);

function contar(){
    let texto = document.querySelector("#txtTexto").value;
    let sinEpacios = eliminarEspacios(texto);
    let sinCosasRaras = eliminarCosasRaras(sinEpacios)
    let cantMayus = contarMax(sinCosasRaras);
    let cantMinus = contarMin(sinCosasRaras);

    document.querySelector("#pRespuesta").innerHTML = "La cantidad de mayúsculas es de " + cantMayus + ". La cantidad de minúsculas es de " + cantMinus + "."; 

}

function eliminarEspacios(texto){
    let sinEspacios = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) !== " "){
            sinEspacios += texto.charAt(i);
        }
    }
    return sinEspacios;
}

function eliminarCosasRaras(texto){
    let sinCosasRaras = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charCodeAt(i) > 64 && texto.charCodeAt(i) < 91 || texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123){
            sinCosasRaras += texto.charAt(i);
        }
    }
    return sinCosasRaras;
}


function contarMin(texto){
    let contadorMin = 0;
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) === (texto.charAt(i)).toLowerCase()){
            contadorMin++;
        }
    }
    return contadorMin;
}

function contarMax(texto){
    let contadorMax = 0;
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) === (texto.charAt(i)).toUpperCase()){
            contadorMax++;
        }
    }
    return contadorMax;
}