document.querySelector("#btnAnalizar").addEventListener("click", analizar);

function analizar(){
    let texto = document.querySelector("#txtTexto").value;
    if (compararPrimeraConUltimaLetra(texto)) {
        document.querySelector("#pRespuesta").innerHTML = "Este texto comienza y termina con la misma letra." ; 
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Este texto no comienza y termina con la misma letra." ;
    }
}

function compararPrimeraConUltimaLetra(texto){
    return texto.charAt(0) === texto.charAt(texto.length - 1);
}