let valor1;
let valor2;
let resto;

document.querySelector("#btnResto").addEventListener("click", calculoResto);

function calculoResto(){
    valor1 = Number(document.querySelector("#txtValor1").value);
    valor2 = Number(document.querySelector("#txtValor2").value);
    resto = valor1 % valor2;

    document.querySelector("#pResto").innerHTML = "Resto: " + resto;

}