document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    num = Number(document.querySelector("#txtNum").value);
    document.querySelector("#pResultado").innerHTML = "";

    if(num>2000){
        let resultado = Number.POSITIVE_INFINITY;
    
        while (resultado >= 100){
            num /= 20;
            resultado = num;
        }
    
        document.querySelector("#pResultado").innerHTML = num;
    }else{
        document.querySelector("#pResultado").innerHTML = "El número ingresado debe ser mayor a 2000, por favor ingrese otro número.";
    }
    
    
}