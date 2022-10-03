document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    let num = Number(document.querySelector("#txtNum").value);
    let salida = "";
    
    for (let i = 31 ; i < 200 ; i++){
        if (i % num === 0 && i % 2 === 0){
            salida += (i + "<br>");
        }
    }

    document.querySelector("#pResultado").innerHTML = salida;

}