document.querySelector("#btnContarVocales").addEventListener("click", contar);

function contar(){
    let texto = document.querySelector("#txtTexto").value;

    document.querySelector("#pRespuesta").innerHTML = contarVocales(texto);

}

function contarVocales(texto){
    let textoMin = texto.toLowerCase();
    let contador = 0;
    for( let i = 0 ; i < textoMin.length ; i++){
        if(textoMin.charAt(i) === "a" || textoMin.charAt(i) === "e" || textoMin.charAt(i) === "i" || textoMin.charAt(i) === "o" || textoMin.charAt(i) === "u"){
            contador ++;
        }
    }
    return contador;
}