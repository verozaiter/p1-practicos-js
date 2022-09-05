let chirridos;
let tempF;
let tempC;
let temp2;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    chirridos = Number(document.querySelector("#txtCriCri").value);
    tempF = 50 + (chirridos - 40)/4 ;
    tempC = (tempF - 32)/1.8;
    temp2 = 10 + (chirridos - 40)/7;

    document.querySelector("#pTempF").innerHTML = "Temperatura en Fahrenheit: " + tempF + " °F";
    document.querySelector("#pTempC").innerHTML = "Temperatura en Celcius: " + tempC + " °C";
    document.querySelector("#pCorroborar").innerHTML = "Temperatura (corroborar): " + temp2 + " °C";
}

//https://www.labrujulaverde.com/2012/10/ley-de-dolbear-el-grillo-como-termometro