let ladoCuadrado;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
ladoCuadrado = Number(document.querySelector("#txtLadoCuadrado").value);

document.querySelector("#pArea").innerHTML = "Área Cuadrado: " + ladoCuadrado*ladoCuadrado;

}