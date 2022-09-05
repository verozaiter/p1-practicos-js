let importe;
let importeFinal;

document.querySelector("#btnFinal").addEventListener("click", total);

function total(){
    importe = Number(document.querySelector("#txtImporte").value);
    importeFinal = importe*1.22;

    document.querySelector("#pTotal").innerHTML = importeFinal;

}
