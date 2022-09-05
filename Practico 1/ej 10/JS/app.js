let importe;
let recarga;
let importeFinal;

document.querySelector("#btnRecarga").addEventListener("click", recargar);

function recargar(){
    importe = Number(document.querySelector("#txtImporte").value);
    recarga = Number(document.querySelector("#txtRecarga").value);
    importeFinal = importe + importe*recarga/100;

    document.querySelector("#pRecarga").innerHTML = importeFinal;

}
