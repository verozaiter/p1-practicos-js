let ingresos;
let costo;
let primerPago, cuotas;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    ingresos = Number(document.querySelector("#txtIngresos").value);
    costo = Number(document.querySelector("#txtCosto").value);

    if (ingresos < 20000){
        primerPago = costo * 0.15;
        cuotas = Math.round((costo*0.85)/ 7 / 12);
    }else{
        primerPago = costo * 0.3;
        cuotas = Math.round(costo*0.7 / 12);
    }

    document.querySelector("#pRespuesta").innerHTML = "El comprador debe pagar $" + primerPago + " por concepto del primer pago y $" + cuotas + " por cada pago parcial."
}