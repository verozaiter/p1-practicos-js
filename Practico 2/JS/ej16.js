let a;
let b;
let c;

document.querySelector("#btnComparar").addEventListener("click", comparar);

function comparar(){
    a = Number(document.querySelector("#txtA").value);
    b = Number(document.querySelector("#txtB").value);
    c = Number(document.querySelector("#txtC").value);

    if(a > b && a > c){
        document.querySelector("#pRespuesta").innerHTML = "a es el mayor de los 3";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "";
    }
}