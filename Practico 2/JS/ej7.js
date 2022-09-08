let numero;

document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#num").value); 

    if (numero > 20 || numero <- 20){
        document.querySelector("#pRespuesta").innerHTML = "CUMPLE";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "NO CUMPLE";
    }
}