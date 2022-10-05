document.querySelector("#btnAno").addEventListener("click", evaluar);

function evaluar(){
    anio = Number(document.querySelector("#txtAno").value);
    let esBis = esBisiesto(anio);

    if (esBis){
        document.querySelector("#pRespuesta").innerHTML = "Es bisiesto";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No es bisiesto";
    }
}

function esBisiesto(anio){
        if ((anio % 4) === 0){
            if ((anio % 100) === 0){
                if ((anio % 400) === 0){
                    return true;
                }else{
                    return false;
                }
            }
        return true;
    }
    return false;
}