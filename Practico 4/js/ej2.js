document.querySelector("#btnMayor").addEventListener("click", mostrar);

function mostrar(){
    let edad = Number(document.querySelector("#txtEdad").value);
    let tope = Number(document.querySelector("#txtTope").value);
    let respuesta = esMayor(edad, tope);

    if (respuesta){
        document.querySelector("#pRespuesta").innerHTML = "Es mayor";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No es mayor";
    }
}

function esMayor(edad, tope){
    return edad > tope;

    /* if (edad >  tope){
        return true;
    }else{
        return false;
    } */
}