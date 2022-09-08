let valor;
let sumaTotal = 0;
let contador = 0;

document.querySelector("#btnSumar").addEventListener("click", sumar);

function sumar(){
    valor = Number(document.querySelector("#txtValor").value);
    document.querySelector("#txtValor").value = "";
    document.querySelector("#txtValor").focus();

    if(valor < 0){
        valor = valor * -1; 
    }    
    
    sumaTotal += valor;
    contador ++;

        if(contador === 6){
        document.querySelector("#pRespuesta").innerHTML = sumaTotal;
        document.querySelector("#btnSumar").setAttribute("value", "FIN");
        document.querySelector("#btnSumar").setAttribute("disabled", "disabled");
        document.querySelector("#txtValor").setAttribute("disabled", "disabled");
        
    }


}