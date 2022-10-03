let num1, num2;
 
document.querySelector("#btnMostrar").addEventListener("click", imprimir);

function imprimir(){
    document.querySelector("#pRespuesta").innerHTML = "";
    num1 = Number(document.querySelector("#txtNum1").value);
    num2 = Number(document.querySelector("#txtNum2").value);

    if(num2 < num1){
        let aux = num1;
        num1 = num2;
        num2 = aux;
    }

    for (let i = num1 ; i <= num2 ; i++){
        document.querySelector("#pRespuesta").innerHTML += `${i} <br>` ; 
    }

 /*    if (num1 > num2){
        for (let i = num2 ; i <= num1 ; i++){
            document.querySelector("#pRespuesta").innerHTML += `${i} <br>` ; 
        }
    } else if (num1 < num2){
        for (let i = num1 ; i <= num2 ; i++){
            document.querySelector("#pRespuesta").innerHTML += `${i} <br>` ; 
        }
    } else {
        document.querySelector("#pRespuesta").innerHTML = num1;
    } */
} 