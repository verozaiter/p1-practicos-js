// alert("Hola");

let nombre;
let apellido;

document.querySelector("#btnReordenar").addEventListener("click", reordenar);

function reordenar(){
    apellido = document.querySelector("#txtApellido").value;
    nombre = document.querySelector("#txtNombre").value;
    document.querySelector("#pNombreReordenado").innerHTML = apellido + ", " + nombre;
}