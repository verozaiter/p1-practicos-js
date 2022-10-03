document.querySelector("#btnEvaluar").addEventListener("click", evaluar);

function evaluar(){
    let num1, num2, num3;
    let salida = "";
    num1 = Number(document.querySelector("#txtNum1").value);
    num2 = Number(document.querySelector("#txtNum2").value);
    num3 = Number(document.querySelector("#txtNum3").value);

    if (num2 < num1){
        let aux = num1;
        num1 = num2;
        num2 = aux;
    }

    for (let i = num1 ; i <= num2 ; i++){
        if (num3 % i === 0){
            salida += (i + ", ")
        }
    }
    
    document.querySelector("#pRespuesta").innerHTML = salida;
    
}