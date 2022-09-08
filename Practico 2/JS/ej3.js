let numero;

document.querySelector("#btnIndicar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#Num").value);
    if (numero >20){
        document.querySelector("#pRespuesta").innerHTML = "es mayor que 20";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "es menor o igual a 20";
    }
}