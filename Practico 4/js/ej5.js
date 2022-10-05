document.querySelector("#btnArea").addEventListener("click", calcular);

function calcular(){
    let ancho = Number(document.querySelector("#txtAncho").value);
    let alto = Number(document.querySelector("#txtAlto").value);
    let area = calcularAreaTriangulo(ancho, alto);

    document.querySelector("#pRespuesta").innerHTML = area + " cm2";
}


function calcularAreaTriangulo(ancho, alto){
    let area = -1;

    if (ancho > 0 && alto > 0 && !isNaN(ancho) && !isNaN(alto)){
        area = ancho * alto;
    }
    return area;   
}