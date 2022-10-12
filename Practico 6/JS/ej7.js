document.querySelector("#btnMostrarNombres").addEventListener("click", mostrarNombres);
document.querySelector("#btnMostrarElemento").addEventListener("click", mostrarElemento);
document.querySelector("#btnSustituir").addEventListener("click", sustituir);

let listado = [];
function mostrarNombres(){
    let nombre = document.querySelector("#txtNombre").value;
    if (nombre !== ""){
        listado.push(nombre);
    }
    document.querySelector("#txtNombre").value = "";
    document.querySelector("#txtNombre").focus();

    document.querySelector("#pNombres").innerHTML = "";

    for (let i = 0 ; i < listado.length ; i++){
        document.querySelector("#pNombres").innerHTML += listado[i] + "<br>"
    };

    document.querySelector("#pNombres").innerHTML += "La cantidad de elementos que tiene el listado es de: " + listado.length + ".";
    
}


function mostrarElemento(){
    let posicion = Number(document.querySelector("#txtPosicion").value);

    if (posicion < listado.length){
        document.querySelector("#pPosicion").innerHTML = "El elemento en la posición " + posicion + " es: " + listado[posicion];
    }else{
        document.querySelector("#pPosicion").innerHTML = "Esa posición aún no existe.";
    }


    document.querySelector("#pUltimoElemento").innerHTML = "El elemento en la posición final es: " + listado[listado.length - 1];
}

function sustituir(){
    let nombreBuscado = document.querySelector("#txtNombreAbuscar").value;
    let nombreSustituto = document.querySelector("#txtNombreSustituto").value;
    let existe = false;
    
    for (let i = 0 ; i < listado.length; i++){
        if (listado[i] === nombreBuscado){
            listado[i] = nombreSustituto
            existe = true;
        }
    }

    if(!existe){
        document.querySelector("#pSustituto").innerHTML = "El nombre buscado no existe.";
    } else{
        document.querySelector("#pSustituto").innerHTML = "El nombre ha sido cambiado con éxito.";
    }

    mostrarNombres();

}