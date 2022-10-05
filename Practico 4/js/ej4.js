document.querySelector("#btnArea").addEventListener("click", calcular);

function calcular(){
    let base = Number(document.querySelector("#txtBase").value);
    let altura = Number(document.querySelector("#txtAltura").value);
    let area = calcularAreaTriangulo(base, altura);

    document.querySelector("#pRespuesta").innerHTML = area + " cm2";
}


function calcularAreaTriangulo(base, altura){
    let area = -1;

    if (base > 0 && altura > 0 && !isNaN(base) && !isNaN(altura)){
        area = base * altura /2;
    }
    return area;   
}