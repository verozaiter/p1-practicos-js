document.querySelector("#btnModificar").addEventListener("click", cambiar);

function cambiar(){
    let texto = document.querySelector("#txtTexto").value;
    let letra = document.querySelector("#txtLetra").value;
    document.querySelector("#pRespuesta").innerHTML = modificarTextoLetra2(texto, letra);
}

function modificarTextoLetra(texto, letra){
    let nuevoTexto = texto;
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) === letra){
            nuevoTexto = nuevoTexto.replace(letra, "*")
        }
    }

    return nuevoTexto;
}


function modificarTextoLetra2(texto, letra){
    let nuevoTexto = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) !== letra){
            nuevoTexto += texto.charAt(i)
        }else{
            nuevoTexto += "*";
        }
    }

    return nuevoTexto;
}