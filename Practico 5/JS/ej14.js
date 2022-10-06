document.querySelector("#btnAnalizar").addEventListener("click", analizar);

function analizar(){
    let texto = document.querySelector("#txtTexto").value;
    let textoMin = convertirAMin(texto);
    document.querySelector("#pRespuesta").innerHTML = contarCantVecesLetra0(textoMin);
}

function contarCantVecesLetra0(texto){
    let cantidad = 0 ;
    for (let i = 0 ; i < texto.length ; i++){
        if(texto.charAt(0) === texto.charAt(i)){
            cantidad++;
        }
    }
    return cantidad;
}

// VERSIÓN MEJORADA

function convertirAMin(texto){
    let aMinusculas = texto.toLowerCase();
    return aMinusculas;
}