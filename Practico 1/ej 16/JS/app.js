let ganados;
let empatados;
let total;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    ganados = Number(document.querySelector("#txtGanados").value);
    empatados = Number(document.querySelector("#txtEmpatados").value);
    total = ganados*3 + empatados;

    document.querySelector("#pTotal").innerHTML = total;

}