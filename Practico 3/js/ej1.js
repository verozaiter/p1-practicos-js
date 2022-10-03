
document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    for (let i = 1 ; i <= 1000 ; i++){
        document.querySelector("#pRespuesta").innerHTML += `${i}<br>` ; 
    }
}