document.querySelector("#btnMostrar").addEventListener("click", dividir);

function dividir(){
    let dividendo = Number(document.querySelector("#txtDividendo").value);
    let divisor = Number(document.querySelector("#txtDivisor").value);
    let cociente = 0;

    if(dividendo < divisor){
        resto = dividendo;
    }
 
    while (dividendo >= divisor){
        dividendo -= divisor;
        cociente += 1;
        resto = dividendo;
    }

    document.querySelector("#pResultado").innerHTML = "Cociente: " + cociente + "<br> Resto: " + resto; 
    
}