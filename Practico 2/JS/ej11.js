let valor1;
let valor2;
let operacion;
let resultado;

document.querySelector("#btnOperar").addEventListener("click", operar);

function operar(){
    valor1 = Number(document.querySelector("#txtValor1").value);
    valor2 = Number(document.querySelector("#txtValor2").value);
    operacion = document.querySelector("#slcOperacion").value;

    if(operacion === "S"){
        resultado = valor1 + valor2;
    }else if(operacion === "R"){
        resultado = valor1 - valor2;
    }else if(operacion === "M"){
        resultado = valor1 * valor2;
    }else{
        resultado = valor1 / valor2;
    }
    document.querySelector("#pResultado").innerHTML = resultado;
}