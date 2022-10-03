document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    for (let i = 20 ; i >= -30 ; i--){
        document.querySelector("#pRespuesta").innerHTML += `${i}<br>` ; 
    }
}