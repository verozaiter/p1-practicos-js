let a;

document.querySelector("#btnComparar").addEventListener("click", comparar);

function comparar(){
    a = Number(document.querySelector("#txtA").value);

    if(a < 0 || a > 10){
        document.querySelector("#pRespuesta").innerHTML = "a está fuera de rango";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "";
    }
}