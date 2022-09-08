let compra;
let final;
let tarjeta;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    compra = Number(document.querySelector("#txtCompra").value);
    tarjeta = document.querySelector("#slcTarjeta").value;

    if(compra < 10000 && tarjeta === "s"){
        final = compra * 0.96;
    }else{
        final = compra;
    }
    
    document.querySelector("#pRespuesta").innerHTML = "El costo final de la compra es de $" + final + ".";
}