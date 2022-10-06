document.querySelector("#btnAnalizar").addEventListener("click", analizar);

function analizar(){
    let texto = document.querySelector("#txtTexto").value;
    
    if (comparar(texto)){
        document.querySelector("#pRespuesta").innerHTML = "Es palíndromo."; 
    }else{
        document.querySelector("#pRespuesta").innerHTML = "No es palíndromo."; 
    }
}

function comparar(texto){
    let sinEpacios = eliminarEspacios(texto);
    let aMinusculas = convertirAMin(sinEpacios);
    let homogeneizado = homogeneizar(aMinusculas);
    let invertido = invertir(homogeneizado);

    return homogeneizado === invertido;
}

function homogeneizar(texto){
    let textoHomo = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charCodeAt(i) > 223 && texto.charCodeAt(i) < 230){
            textoHomo += "a";
        }else if(texto.charCodeAt(i) > 231 && texto.charCodeAt(i) < 236){
            textoHomo += "e";
        }else if(texto.charCodeAt(i) > 235 && texto.charCodeAt(i) < 240){
            textoHomo += "i";
        }else if(texto.charCodeAt(i) > 241 && texto.charCodeAt(i) < 247){
            textoHomo += "o";
        }else if(texto.charCodeAt(i) > 248 && texto.charCodeAt(i) < 253){
            textoHomo += "u";
        }else{
            textoHomo += texto.charAt(i);
        }
    }
    return textoHomo
}


function eliminarEspacios(texto){
    let sinEspacios = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) !== " "){
            sinEspacios += texto.charAt(i);
        }
    }
    return sinEspacios;
}

function convertirAMin(texto){
    let aMinusculas = texto.toLowerCase();
    return aMinusculas;
}

function invertir(texto){
    let invertida = "";
    for (i = texto.length - 1 ; i >= 0 ; i--){
        invertida += texto.charAt(i) 
    }
    return invertida;
}

