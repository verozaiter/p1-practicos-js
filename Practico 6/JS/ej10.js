/* document.querySelector("#btnPrueba").addEventListener("click", probar);

function probar(){
    let arrayPrueba = document.querySelector("#txtPrueba").value;
    let limpiado = eliminarRepetidos(arrayPrueba);

    document.querySelector("#pRespuesta").innerHTML = limpiado;

} */

function eliminarRepetidos(array){
    let limpio = [];
    let aparece = false;

    for (let i = 0 ; i < array.length ; i++){
        for(let j = 0; j < limpio.length ; j++){
            if (limpio[j] === array[i]){
                aparece = true;
            }

        }
        if(!aparece){
            limpio.push(array[i]);
        }
        aparece = false;
    }

    return limpio;
}