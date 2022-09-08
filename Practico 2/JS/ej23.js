let nota, notaMax, notaMin;
let contador = 0;
let promedio;
let totalNotas = 0;
let perdieron = 0;
let salvaron = 0;
let mb = 0

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    nota = Number(document.querySelector("#txtNota").value);
    document.querySelector("#txtNota").value = "";
    document.querySelector("#txtNota").focus();
        contador++
    totalNotas += nota
    promedio = totalNotas / contador;

    if(contador === 1){
        notaMax = nota;
        notaMin = nota;
    }

    if(nota > notaMax){
        notaMax = nota;
    }

    if(nota < notaMin){
        notaMin = nota;
    }

    if(nota < 70){
        perdieron ++
    }else{
        salvaron ++
    }

    if(nota > 90){
        mb ++
    }


    document.querySelector("#pRespuesta1").innerHTML = perdieron + " estudiante/s perdió/eron, " + salvaron + " estudiante/s salvó/aron y " + mb + " tuvo/ieron muy buena nota.";
    document.querySelector("#pRespuesta2").innerHTML = "El promedio de notas es de " + promedio + ". La nota máxima fue de " + notaMax + " y la nota mínima fue de " + notaMin + ".";
}