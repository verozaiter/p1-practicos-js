let valor;
let contador = 0;
let multiplos5 = 0;
let mayores20 = 0;
let ambas = 0;

document.querySelector("#btnAnalizar").addEventListener("click", analizar);

function analizar(){
    valor = Number(document.querySelector("#txtValor").value);
    document.querySelector("#txtValor").value = "";
    document.querySelector("#txtValor").focus();
    contador ++;

    if((valor % 5) === 0){
        multiplos5 ++;
    }
    if(valor > 20){
        mayores20 ++; 
    }
    if((valor % 5) === 0 && valor > 20){
        ambas ++;
    }

    if(contador === 5){
        document.querySelector("#pRespuesta").innerHTML = multiplos5 + " número/s es/son múltiplos de 5, " + mayores20 + " número/s es/son mayores que 20 y " + ambas + " número/s cumplió/eron ambas condiciones en simultáneo."
        document.querySelector("#btnAnalizar").setAttribute("value", "FIN");
        document.querySelector("#btnAnalizar").setAttribute("disabled", "disabled");
        document.querySelector("#txtValor").setAttribute("disabled", "disabled");
    }
}