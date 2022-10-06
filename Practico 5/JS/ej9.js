document.querySelector("#btnAveriguar").addEventListener("click", averiguar);

function averiguar(){
    let matricula = document.querySelector("#txtMat").value;
    if (analizarMatricula(matricula) !== ""){
        document.querySelector("#pRespuesta").innerHTML = "Esa matrícula corresponde al departamento de " + analizarMatricula(matricula) + ".";
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Esa matrícula no es uruguaya."
    }
}

function analizarMatricula(matricula){
    matricula = matricula.toUpperCase();
    let depto = ""
    switch(matricula.charAt(0)){
        case "A":
            depto = "Canelones";
            break;
        case "B":
            depto = "Maldonado";
            break;
        case "C":
            depto = "Rocha";
            break;
        case "D":
            depto = "Treinta y Tres";
            break;
        case "E":
            depto = "Cerro Largo";
            break;
        case "F":
            depto = "Rivera";
            break;
        case "G":
            depto = "Artigas";
            break;
        case "H":
            depto = "Salto";
            break;
        case "I":
            depto = "Paysandú";
            break;
        case "J":
            depto = "Río Negro";
            break;
        case "K":
            depto = "Soriano";
            break;
        case "L":
            depto = "Colonia";
            break;
        case "M":
            depto = "San José";
            break;
        case "N":
            depto = "Flores";
            break;
        case "O":
            depto = "Florida";
            break;
        case "P":
            depto = "Lavalleja";
            break;
        case "Q":
            depto = "Durazno";
            break;
        case "R":
            depto = "Tacuarembó";
            break;
        case "S":
            depto = "Montevideo";
            break;
        
    }
    return depto;
}