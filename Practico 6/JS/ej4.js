document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnCalcular").addEventListener("click", calcularProm);

let arrayNum = [];

function agregar(){
    let num = Number(document.querySelector("#txtNum").value);
    arrayNum.push(num);
    document.querySelector("#txtNum").value = "";
    document.querySelector("#txtNum").focus();
}

function calcularProm(){
    let suma = 0
    for (let i = 0 ; i < arrayNum.length ; i++){
        suma += arrayNum[i];
    }

    let promedio = suma / arrayNum.length;

    document.querySelector("#pRespuesta").innerHTML = promedio;
}
