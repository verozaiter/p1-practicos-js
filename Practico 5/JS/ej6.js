document.querySelector("#btnVerificar").addEventListener("click", verificar);

function verificar(){
    let texto1 = document.querySelector("#txtTexto1").value;
    let texto2 = document.querySelector("#txtTexto2").value;
    if (verificarTxtDentroTxt(texto1, texto2)){
        document.querySelector("#pRespuesta").innerHTML = `"${texto2}"`  + " es una subcadena de " + `"${texto1}".`;
    }else{
        document.querySelector("#pRespuesta").innerHTML = `"${texto2}"` + " no es una subcadena de " + `"${texto1}".`;
    }
}

function verificarTxtDentroTxt(texto1, texto2){
    return texto1.indexOf(texto2) !== -1
}