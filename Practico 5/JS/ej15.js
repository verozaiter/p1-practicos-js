document.querySelector("#btnAnalizar").addEventListener("click", analizar);

function analizar(){
    let texto = document.querySelector("#txtTexto").value;
    document.querySelector("#pRespuesta").innerHTML = buscarPenultimaA(texto);

}

function buscarPenultimaA(texto){
    let nuevoTexto = texto;
    
    if (texto.indexOf("a") !== -1){
        nuevoTexto = borrarUltimaA(texto);
    }

    return nuevoTexto.lastIndexOf("a");
}

function borrarUltimaA(texto){
    let textoSinUltimaA = ""

    if (texto.indexOf("a") !== -1){
        for (let i = 0 ; i < texto.lastIndexOf("a") ; i++){
        textoSinUltimaA = textoSinUltimaA + texto.charAt(i);
        }
    }

    return textoSinUltimaA;
}