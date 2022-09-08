let depto;

document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    depto = document.querySelector("#slcDepto").value;

    document.querySelector("#pDepto").innerHTML = depto;
}