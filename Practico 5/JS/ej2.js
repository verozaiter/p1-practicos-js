document.querySelector("#btnBuscar").addEventListener("click", buscarEnTexto);

function buscarEnTexto(){
    let texto = document.querySelector("#txtTexto").value;
    let letra = document.querySelector("#txtLetra").value;

    document.querySelector("#pRespuesta").innerHTML = buscar(texto, letra);

}

function buscar(texto, letra){
    let contador = 0;

    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) === letra){
            contador ++;
        } 
    }

    return contador;
}