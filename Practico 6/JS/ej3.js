document.querySelector("#btnAgregar").addEventListener("click", agregar);
document.querySelector("#btnMostrar").addEventListener("click", mostrar);

let listado = [];

function agregar(){
    let texto = document.querySelector("#txtTexto").value;
    listado.push(texto);
    document.querySelector("#txtTexto").value = "";
    document.querySelector("#txtTexto").focus();
}

function mostrar(){
    for (let i = 0 ; i < listado.length ; i++){
        document.querySelector("#pRespuesta").innerHTML += listado[i] + "<br>"
    }
}