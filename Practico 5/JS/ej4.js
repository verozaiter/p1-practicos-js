document.querySelector("#btnConvertir").addEventListener("click", convertirAMin);

function convertirAMin(){
    let texto = document.querySelector("#txtTexto").value;
    texto = texto.toLowerCase();
    document.querySelector("#pRespuesta").innerHTML = texto;
}