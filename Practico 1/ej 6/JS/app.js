let uyu;
let usd;

document.querySelector("#btnCalcular").addEventListener("click", calcularCambio);

function calcularCambio(){
    uyu = Number(document.querySelector("#txtUYU").value);
    usd = Number(document.querySelector("#txtUSD").value);
    resultado = Math.round(uyu/usd);
    document.querySelector("#pEnUSD").innerHTML = resultado + " USD";
}