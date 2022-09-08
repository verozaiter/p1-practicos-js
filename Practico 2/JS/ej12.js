let carac;

document.querySelector("#btnVocal").addEventListener("click", evaluar);

function evaluar(){
    carac = document.querySelector("#txtCarac").value;

    switch(carac){
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            document.querySelector("#pRespuesta").innerHTML = "Es una vocal."
            break;
        default:
            document.querySelector("#pRespuesta").innerHTML = "No es una vocal."

    }
}