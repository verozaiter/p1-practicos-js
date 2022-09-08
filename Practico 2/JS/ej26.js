let noches, medio, montoFinal;
let nochesRegalo = 0;
let nochesTotal;

document.querySelector("#btnNoches").addEventListener("click", calcularNoches);

function calcularNoches(){
    noches = Number(document.querySelector("#txtNoches").value);
    medio = document.querySelector("#slcMedio").value;

    if (noches>= 3 && noches<7){
        nochesRegalo = 1;
    }
    if(noches >= 7){
        if(medio === "t"){
        nochesRegalo = 3;
        }else{
        nochesRegalo = 2;
        }
    }

    montoFinal = noches * 40;
    nochesTotal = noches + nochesRegalo;

    document.querySelector("#pRespuesta").innerHTML =  "Ud. tiene " + nochesRegalo + " noches de regalo, se hospeda " + nochesTotal + " noches y el costo total es de $" + montoFinal + ".";

    nochesRegalo = 0

}