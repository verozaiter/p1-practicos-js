let numero;

document.querySelector("#btnIndicar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#Num").value);

    if (numero >= 0){
        document.querySelector("#pRespuesta").innerHTML = "Positivo";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Negativo";
    }
}