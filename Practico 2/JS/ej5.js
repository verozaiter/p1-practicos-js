let numero;

document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#Num").value);
    if(numero > 10 && numero < 20){
        document.querySelector("#pRespuesta").innerHTML = "Es mayor que diez y menor que 20";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "El número no mayor que diez y menor que 20 a la vez";
    }
}