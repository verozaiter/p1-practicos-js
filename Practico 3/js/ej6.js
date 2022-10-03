document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    for (let i = -32 ; i <= 230 ; i += 4){
        document.querySelector("#pRespuesta").innerHTML += `${i}<br>` ; 
    }
}