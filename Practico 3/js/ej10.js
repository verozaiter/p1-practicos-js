let num1, num2, producto;

document.querySelector("#btnOperar").addEventListener("click", operar);

function operar(){
    document.querySelector("#pRespuesta").innerHTML = "";
    num1 = Number(document.querySelector("#txtNum1").value);
    num2 = Number(document.querySelector("#txtNum2").value);
    producto = 1;

    for (let i = num1; i <= num2  ; i++){
        producto *= i;        
    }

    document.querySelector("#pRespuesta").innerHTML = producto;

}
