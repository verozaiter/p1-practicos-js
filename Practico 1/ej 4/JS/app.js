let valor1;
let valor2;
let suma;
let producto;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    valor1 = Number(document.querySelector("#txtValor1").value);
    valor2 = Number(document.querySelector("#txtValor2").value);
    suma = valor1 + valor2;
    producto =  valor1 * valor2;

    document.querySelector("#pSuma").innerHTML = "Suma: " + suma;
    document.querySelector("#pProducto").innerHTML = "Producto: " + producto;

}