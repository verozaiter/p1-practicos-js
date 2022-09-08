let numero;

document.querySelector("#btnCambiar").addEventListener("click", cambiar);

function cambiar(){
    numero = Number(document.querySelector("#Num").value);
    if (numero < 0){
        numero = numero*-1;
    }
    document.querySelector("#pRespuesta").innerHTML = numero;
}