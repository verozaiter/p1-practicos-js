document.querySelector("#btnAgregar").addEventListener("click", agregar);

let nombres = [];

function agregar(){
    let nombre = document.querySelector("#txtNombre").value;
    let aparece = false;
    
    for(let i = 0 ; i < nombres.length ; i++){
        if(nombre === nombres[i]){
           aparece = true;
            break;
        }
    }

    if(!aparece){
        nombres.push(nombre);
    }
    
    document.querySelector("#pRespuesta").innerHTML = "";

    for(let i = 0 ; i < nombres.length ; i++){
        document.querySelector("#pRespuesta").innerHTML += nombres[i] + "<br>";
    }

    document.querySelector("#txtNombre").value = "";
    document.querySelector("#txtNombre").focus();

}