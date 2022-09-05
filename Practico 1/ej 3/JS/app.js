let valor1;
let valor2;
let valor3;

document.querySelector("#btnSuma").addEventListener("click", sumar);

function sumar(){

    valor1 = Number(document.querySelector("#txtValor1").value);
    valor2 = Number(document.querySelector("#txtValor2").value);
    valor3 = Number(document.querySelector("#txtValor3").value);
    
    document.querySelector("#pSuma").innerHTML = valor1 + valor2 + valor3;

}