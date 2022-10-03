let num, factorial;

document.querySelector("#btnCalcular").addEventListener("click", factorialN);

function factorialN(){
    num = Number(document.querySelector("#txtNum").value);
    factorial = 1;

    for (let i = num ; i >= 1 ; i--){
        factorial *= i;
    }

    document.querySelector("#pRespuesta").innerHTML = factorial;
}