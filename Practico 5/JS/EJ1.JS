document.querySelector("#btnInvertir").addEventListener("click", invertirTexto);

function invertirTexto(){
    let texto = document.querySelector("#txtTexto").value;
    
    document.querySelector("#pRespuesta").innerHTML = invertir(texto);

}

function invertir(texto){
    let invertida = "";
    for (i = texto.length - 1 ; i >= 0 ; i--){
        invertida += texto.charAt(i) 
    }
    return invertida;
}