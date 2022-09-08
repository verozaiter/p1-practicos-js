let kilos;
let envase;
let costo;
let costoFinal;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    kilos = Number(document.querySelector("#txtArroz").value);
    envase = document.querySelector("#slcEnvase").value;

    if(kilos > 2){
        costo = 20;
    }else if (kilos > 1){
        costo = 22;
    }else{
        costo = 25;
    }

    costoFinal = kilos * costo;

    if (envase === "n"){
        costoFinal += 20;
    }

    document.querySelector("#pRespuesta").innerHTML = costoFinal;


}