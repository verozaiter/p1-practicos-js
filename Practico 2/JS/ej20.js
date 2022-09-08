let tazasAzucar;
let gramosHarina;
let cucharadasAceite;
let tazasAgua;
let cp, cpAz1, cpHa2, cpAc3, cpAg4;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    tazasAzucar = Number(document.querySelector("#TxtTazasAzucar").value);
    gramosHarina = Number(document.querySelector("#TxtGrHarina").value);
    cucharadasAceite = Number(document.querySelector("#TxtCucharadasAceite").value);
    tazasAgua = Number(document.querySelector("#TxtTazasAgua").value);
    cpAz1 = tazasAzucar / 1 - tazasAzucar % 1;
    cpHa2 = gramosHarina / 100 - (gramosHarina / 100) % 1;
    cpAc3 = cucharadasAceite / 1 - cucharadasAceite % 1;
    cpAg4 = tazasAgua / 1 - tazasAgua % 1;

    if (cpAz1 < cpHa2 && cpAz1 < cpAc3 &&  cpAz1 < cpAg4){
        cp = cpAz1;
    }else if (cpHa2 < cpAc3 && cpHa2 < cpAg4){
        cp = cpHa2;
    }else if(cpAc3 < cpAg4){
        cp = cpAc3;
    }else{
        cp = cpAg4;
    }

    //cp = Math.min(cpAz1, cpHa2, cpAc3, cpAg4);

    document.querySelector("#pRespuesta").innerHTML = "Ud. podrá elaborar " + cp + " receta/s de galletas.";
    

}