document.querySelector("#btnDibujar").addEventListener("click", dibujar);

function dibujar(){
    document.querySelector("#pDibujo").innerHTML = "";
    let ancho = Number(document.querySelector("#txtAncho").value);
    let alto = Number(document.querySelector("#txtAlto").value);
    let linea = "";

    for(let i = 0 ; i < ancho ; i++){
        linea += "xx ";
    }

    for (let i = 0 ; i < alto ; i++){
        document.querySelector("#pDibujo").innerHTML += linea + "<br>" ;
    }


   /*  for (let i = 1 ; i <= alto * ancho ; i++){
        document.querySelector("#pDibujo").innerHTML += "xx " ;
        if ( i % ancho === 0 ){
            document.querySelector("#pDibujo").innerHTML += linea + "<br>" ;
        }
    }
 */



}