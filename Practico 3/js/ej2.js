
document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    for (let i = -100 ; i <= 10 ; i++){
        document.querySelector("#pRespuesta").innerHTML += `${i}<br>` ; 
    }
}