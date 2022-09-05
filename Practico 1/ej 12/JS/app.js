let peso;
let altura;
let indice;

document.querySelector("#btnIndice").addEventListener("click", calcular);

function calcular(){
    peso = Number(document.querySelector("#txtPeso").value);
    altura = Number(document.querySelector("#txtAltura").value);
    indice = peso / (altura*altura)

    document.querySelector("#pIndice").innerHTML = indice;
    
}