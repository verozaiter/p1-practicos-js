document.querySelector("#btnConvertir").addEventListener("click", convertirAMay);

function convertirAMay(){
    let texto = document.querySelector("#txtTexto").value;
    texto = texto.toUpperCase();
    document.querySelector("#pRespuesta").innerHTML = texto;
}