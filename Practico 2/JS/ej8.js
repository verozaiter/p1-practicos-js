//si el número es mayor que 30 mostrar “es mayor que treinta”, 
//sino si es menor que 10 mostrar “menor que 10”, sino mostrar “Entre diez y treinta”.

let numero;

document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    numero = Number(document.querySelector("#num").value);

    if (numero > 30){
        document.querySelector("#pRespuesta").innerHTML = "Es mayor que treinta";
    }else if (numero < 10){
        document.querySelector("#pRespuesta").innerHTML = "Menor que 10";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Entre diez y treinta";
    }
}