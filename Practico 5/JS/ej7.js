document.querySelector("#btnContar").addEventListener("click", contar);

function contar(){
    let texto = document.querySelector("#txtTexto").value;
    document.querySelector("#pRespuesta").innerHTML = contarPalabras(texto) + " palabra/s.";
}

function contarPalabras(texto){
    let contador = 1;
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) === " " && texto.charAt(i + 1) !== " " && texto.charAt(i + 1) !== ""){
            contador ++
        }
    }
    return contador;
}