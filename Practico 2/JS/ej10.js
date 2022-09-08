//alert("hola");

let num1;
let num2;
let resultado;

document.querySelector("#btnRestar").addEventListener("click", restar);

function restar(){
    num1 = Number(document.querySelector("#TxtNum1").value);
    num2 = Number(document.querySelector("#TxtNum2").value);

    if (num1>=num2){
        resultado = num1 - num2 ;
    }else{
        resultado = num2 - num1 ;
    }

    document.querySelector("#pResultado").innerHTML = "Resultado: " + resultado;

}