document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnMostrar").addEventListener("click", mostrar);

let arrayNumerico = [];
let NumMayor = Number.NEGATIVE_INFINITY;

function agregar(){
    let num = Number(document.querySelector("#txtNum").value);
    arrayNumerico.push(num);
    document.querySelector("#txtNum").value = "";
    document.querySelector("#txtNum").focus();
}

function mostrar(){
    for (let i = 0 ; i < arrayNumerico.length ; i++){
        if (arrayNumerico[i] > NumMayor){
            NumMayor = arrayNumerico[i];
        }
    }

    document.querySelector("#pRespuesta").innerHTML = NumMayor;
}