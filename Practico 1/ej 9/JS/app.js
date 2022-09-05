let valor1;
let valor2;
let valor3;
let resultado;

document.querySelector("#btnCuenta").addEventListener("click", cuenta);

function cuenta(){
    valor1 = Number(document.querySelector("#txtValor1").value);
    valor2 = Number(document.querySelector("#txtValor2").value);
    valor3 = Number(document.querySelector("#txtValor3").value);
    resultado = valor1*valor1 - valor2 - valor3;

    document.querySelector("#pCuenta").innerHTML = resultado;

}