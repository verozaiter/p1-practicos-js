/* Los días domingo el usuario no trabaja, el resto de los días sí.
Si la temperatura está por debajo de los 10 grados el usuario debe 
"abrigarse mucho", si la temperatura está por encima de los 20 grados 
el usuario deberá "ponerse ropa cómoda" y para casos intermedios usará "abrigo moderado". 
Se ingresa la temperatura y el día de la semana y la aplicación deberá mostrar la salida. 
A la salida se le incorporará para todos los casos la instrucción de levantarse: */

let temp;
let dia;

document.querySelector("#btnDecision").addEventListener("click", decidir);

function decidir(){
    temp = Number(document.querySelector("#txtTemp").value);
    dia = document.querySelector("#slcDia").value;
    document.querySelector("#pLevantarse").innerHTML = "Levantarse";

    if (temp < 10){
        document.querySelector("#pTemp").innerHTML = "Abrigarse mucho";
    }else if(temp > 20){
        document.querySelector("#pTemp").innerHTML = "Ponerse ropa cómoda";
    }else{
        document.querySelector("#pTemp").innerHTML = "Abrigo moderado";
    }

    if (dia === "do"){
        document.querySelector("#pDia").innerHTML = "Quedarse en casa, hoy no trabaja";
    }else{
        document.querySelector("#pDia").innerHTML = "Ir al trabajo";
    }
}