let num1, num2, producto;

document.querySelector("#btnOperar").addEventListener("click", operar);

function operar(){
    producto = 0
    document.querySelector("#pRespuesta").innerHTML = "";
    num1 = Number(document.querySelector("#txtNum1").value);
    num2 = Number(document.querySelector("#txtNum2").value);

    for (let i = 1 ; i <= num2 ; i++){
        producto += num1;
    }

    document.querySelector("#pRespuesta").innerHTML = producto;
}