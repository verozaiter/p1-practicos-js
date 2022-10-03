document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    for (let i = 5 ; i <= 450 ; i += 5){
        document.querySelector("#pRespuesta").innerHTML += `${i}<br>` ; 
    }
}