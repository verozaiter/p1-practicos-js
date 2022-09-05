let cantidad = 0;
let agregado;

document.querySelector("#btnAgregar").addEventListener("click", acumular);

function acumular(){
    agregado = Number(document.querySelector("#valor").value);
    cantidad += agregado
}

document.querySelector("#btnTotal").addEventListener("click", mostrar);

function mostrar(){
    document.querySelector("#pTotal").innerHTML = cantidad;
}