let sueldo, sueldoMin;
let totalSueldos = 0;
let empleados = 0;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    sueldo = Number(document.querySelector("#txtSueldos").value);
    totalSueldos += sueldo;
    empleados ++;
    document.querySelector("#txtSueldos").value = "";
    document.querySelector("#txtSueldos").focus();

    if (empleados === 1){
        sueldoMin = sueldo;
    }

    if (sueldo < sueldoMin){
        sueldoMin = sueldo;
    }

    document.querySelector("#pRespuesta").innerHTML = "$" + totalSueldos + " es el total de los sueldos a pagar. " + empleados + " empleado/s cobrará/n este mes. El sueldo más bajo es de $" + sueldoMin + "."; 
}