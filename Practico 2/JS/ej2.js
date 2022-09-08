let numero;

document.querySelector("#btnIndicar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#Num").value);
    if (numero >10){
        document.querySelector("#pRespuesta").innerHTML = "Mayor que diez";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "";
    }
}