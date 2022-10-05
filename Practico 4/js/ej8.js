document.querySelector("#btnPotencia").addEventListener("click", resultadoPotencia);

function resultadoPotencia(){
    let base = Number(document.querySelector("#txtBase").value);
    let exponente = Number(document.querySelector("#txtExponente").value);
        
    let resultado = calcularPotencia(base, exponente);

    document.querySelector("#pRespuesta").innerHTML = resultado;
}

function calcularPotencia(base, exponente){
    let answer = 1;

    if (exponente > 0){
        for (i = 0 ; i < exponente ; i++){
            answer = answer * base;
        }
    }else if (exponente < 0){
        for (i = 0 ; i > exponente ; i--){
            answer = answer * base;
        }
        answer = 1 / answer;
    }

    return answer
}