class Zapato{
    constructor(marca, talle, color, tipo){
        this.marca = marca, 
        this.talle = talle, 
        this.color = color, 
        this.tipo = tipo
    }
}

let zapatos = [];

document.querySelector("#btnIngresar").addEventListener("click", ingresar);

function ingresar(){
    let marca = document.querySelector("#txtMarca").value;
    let talle = Number(document.querySelector("#txtTalle").value);
    let color = document.querySelector("#txtColor").value;
    let tipo = document.querySelector("#slcTipo").value;

    if (marca !== "" && !isNaN(talle) && talle > 29 && talle < 47){
        let zapato = new Zapato(marca, talle, color, tipo);
        zapatos.push(zapato);
    }

    if (mayoresA38(zapatos, "Nacional") > mayoresA38(zapatos, "Importado")){
        document.querySelector("#pRespuesta").innerHTML = "Hay más zapatos nacionales de talle mayor a 38 que importados de talle mayor a 38."
    }else if(mayoresA38(zapatos, "Nacional") < mayoresA38(zapatos, "Importado")){
        document.querySelector("#pRespuesta").innerHTML = "Hay más zapatos importados de talle mayor a 38 que nacionales de talle mayor a 38."
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Hay la misma cantidad de zapatos nacionales de talle mayor a 38 que de importados de talle mayor a 38."
    }
}

function mayoresA38(arrayZapatos, tipo){
    let cantidad = 0;
    for(let i = 0 ; i < arrayZapatos.length ; i++){
        if(arrayZapatos[i].tipo === tipo && arrayZapatos[i].talle > 38){
            cantidad ++;
        }
    }
    return cantidad;
}