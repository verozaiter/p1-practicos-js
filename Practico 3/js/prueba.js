let sueldo, estado;

document.querySelector("#btnSueldo").addEventListener("click", calcularSueldo);

function calcularSueldo(){
    sueldo = Number(document.querySelector("#txtSueldo").value);
    estado = document.querySelector("#slcIncor").value;

    if(estado === "c"){
        if (sueldo < 10000){
            sueldo *= 0.95;
        }else if (sueldo < 20000){
            sueldo *= 0.9;
        }else{
        sueldo *= 0.85;
        }
    }
    document.querySelector("#pRespuesta").innerHTML = sueldo;
}