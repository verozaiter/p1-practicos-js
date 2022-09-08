let num1, num2, distancia;
let intentos = -1;

document.querySelector("#btnJugar").addEventListener("click", jugar);

function jugar(){

    if(intentos === -2){
        document.querySelector("#label").innerHTML = "Ingrese numero (entre 1 y 100) jugador 1:";
        document.querySelector("#btnJugar").value = "Esconder";
        document.querySelector("#pRespuesta").innerHTML = "";
        limpiar();
    }

    if(intentos === -1){
        num1 = Number(document.querySelector("#txtNum").value);
        limpiar();
    }

    intentos ++;

    if(intentos === 0){
        document.querySelector("#label").innerHTML = "Adivine numero (entre 1 y 100) jugador 1:";
        document.querySelector("#btnJugar").value = "Probar";
    }

    if(intentos >= 1){
        num2 = Number(document.querySelector("#txtNum").value);
        distancia = num2 - num1;

        if(distancia < 0){
            distancia *= -1;
        }

        limpiar();

        if(distancia > 15){
            document.querySelector("#pRespuesta").innerHTML = "Estás lejos."
        }
        if(distancia >= 10 && distancia <= 15){
            document.querySelector("#pRespuesta").innerHTML = "Te estás acercando."
        }
        if(distancia >= 5 && distancia <= 9){
            document.querySelector("#pRespuesta").innerHTML = "Cada vez más cerca."
        }
        if(distancia >= 1 && distancia <= 4){
            document.querySelector("#pRespuesta").innerHTML = "Muy pero muy cerca."
        }
        if(num1 === num2){
            document.querySelector("#pRespuesta").innerHTML = "Te llevó " + intentos + " intento/s adivinar el número.";
            document.querySelector("#btnJugar").value = "Volver a Jugar";
            intentos = -2;
        }

    }

    function limpiar(){
        document.querySelector("#txtNum").value = "";
        document.querySelector("#txtNum").focus();
    }
}