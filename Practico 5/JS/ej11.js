document.querySelector("#btnModificar").addEventListener("click", modificar);

function modificar(){
    let texto = document.querySelector("#txtTexto").value;
    document.querySelector("#pRespuesta").innerHTML = textoLindo(texto);
    
}

function textoLindo(texto){
    textoMod = (texto.charAt(0)).toUpperCase();
    
    for(let i = 1 ; i < texto.length ; i++){
        textoMod += (texto.charAt(i)).toLowerCase();
    }

    return textoMod
}