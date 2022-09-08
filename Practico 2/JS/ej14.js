let millas;
let planPlus;

document.querySelector("#btnDestino").addEventListener("click", analizar);

function analizar(){
    millas = Number(document.querySelector("#txtMillas").value);
    planPlus = document.querySelector("#slcPlan").value;

    if(planPlus === "s"){
        millas = millas*2;
    }

    if(millas >= 60000){
        document.querySelector("#pRespuesta").innerHTML = "Puede viajar a Europa como destino más lejano.";
    }else if(millas >= 30000){
        document.querySelector("#pRespuesta").innerHTML = "Puede viajar a América del Norte como destino más lejano.";
    }else if(millas >= 15000){
        document.querySelector("#pRespuesta").innerHTML = "Puede viajar a América del Sur como destino más lejano.";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No dispone de millas suficientes para viajar";
    }
 

}