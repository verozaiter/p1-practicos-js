let num;

document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    num = Number(document.querySelector("#num").value);

    if ((num % 7) == 0 && (num % 3) == 0){
        document.querySelector("#pRespuesta").innerHTML = "Es múltiplo de 7 y de 3 simultáneamente";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No es múltiplo de 7 y de 3 simultáneamente";
    }
}