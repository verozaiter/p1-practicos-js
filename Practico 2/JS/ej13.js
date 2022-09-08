let num1;
let num2;
let respuesta;

document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    num1 = Number(document.querySelector("#txtNum1").value);
    num2 = Number(document.querySelector("#txtNum2").value);

    if ((num1 % num2) === 0){
        respuesta = "El primer número es múltiplo del segundo.";
    }else{
        respuesta = "El primer número no es múltiplo del segundo.";
    }

    document.querySelector("#pResultado").innerHTML = respuesta;
}