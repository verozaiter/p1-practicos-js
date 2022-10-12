document.querySelector("#btnMostrarFibo").addEventListener("click", mostrar);

function mostrar(){
    document.querySelector("#pMostrar").innerHTML = "";

    let fibo = [1, 1];

    let i = 0;
    while (fibo[fibo.length - 1] < 1000){
        fibo[i + 2] = fibo[i] + fibo[i+1]
        i++;
    }
    
    for(let i = 0 ; i < fibo.length - 1 ; i ++){
        document.querySelector("#pMostrar").innerHTML += fibo[i] + ", "
    }
    document.querySelector("#pMostrar").innerHTML += fibo[fibo.length-1] + "."
}