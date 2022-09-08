let puntaje1, puntaje;
let pT1 = 0;
let pT2 = 0;
let contador = 0;

document.querySelector("#btnSumar").addEventListener("click", sumarPuntos);

function sumarPuntos(){
    if((contador % 2) === 0){
        puntaje1 = Number(document.querySelector("#txtPuntaje").value);
        pT1 += puntaje1;
        limpiar();
        document.querySelector("#label").innerHTML = "Ingrese puntaje equipo 2:";
    }
    
    if((contador % 2) === 1){
        puntaje2 = Number(document.querySelector("#txtPuntaje").value);
        pT2 += puntaje2;
        limpiar();
        document.querySelector("#label").innerHTML = "Ingrese puntaje equipo 1:"
    }
    contador ++;


    if (pT1 >= 30 || pT2 >= 30){
        document.querySelector("#btnSumar").setAttribute("disabled", "disabled");
        document.querySelector("#txtPuntaje").setAttribute("disabled", "disabled");
        if(pT1 >= 30){
            document.querySelector("#btnSumar").value = "Fin del juego - Ganó Equipo 1";
        }
        if(pT2 >= 30){
            document.querySelector("#btnSumar").value = "Fin del juego - Ganó Equipo 2";
        }
    }

    document.querySelector("#pRespuesta").innerHTML = "PUNTAJE TOTAL EQUIPO 1: " + pT1;
    document.querySelector("#pRespuesta2").innerHTML = "PUNTAJE TOTAL EQUIPO 2: " + pT2;
}

function limpiar(){
    document.querySelector("#txtPuntaje").value = "";
    document.querySelector("#txtPuntaje").focus();
}