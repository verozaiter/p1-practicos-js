document.querySelector("#btnAgregarYmostrar").addEventListener("click", agregarYmostrar);

let arrayCreado = [];
let arrayNumerico = [];

function agregarYmostrar(){
    let elemento = document.querySelector("#txtTexto").value;
    arrayCreado.push(elemento);
    arrayNumerico.push(elemento.length);

    document.querySelector("#pRespuesta").innerHTML = "";
    for(let i = 0 ; i < arrayCreado.length ; i++){
        document.querySelector("#pRespuesta").innerHTML += arrayNumerico[i] + "<br>";
    }

    document.querySelector("#txtTexto").value = "";
}