let num;

document.querySelector("#btnPrint").addEventListener("click", imprimir);

function imprimir(){
    let salida = "";
    num = Number(document.querySelector("#txtNum").value);

    if (num >= 2 && num <= 50){
        for (let i = 0 ; i < num ; i++){
            salida += `-` ; 
        }
        document.querySelector("#pRespuesta").innerHTML = salida;
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No podes nei, te dije entre 2 y 50."
    }

   
}