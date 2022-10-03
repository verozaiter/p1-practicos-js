document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    num = Number(document.querySelector("#txtNum").value);
    cantidadDig = 0;

    while (num >= 1){
        num /= 10;
        cantidadDig += 1;
    }

    document.querySelector("#pRespuesta").innerHTML = cantidadDig;
}