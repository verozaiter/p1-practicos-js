// Crear una función que reciba como parámetro un string y un número y retorne un nuevo string con las letras que se encuentren en posiciones que sean múltiplo del número recibido. CHECK

//Crear dos campos de texto y un botón para agregar textos a un array. En el primer campo se ingresa un texto y en el segundo un número. Con cada ingreso se convertirá ese texto del primer campo según el criterio de la parte 1) y tomando las posiciones a las que se haga referencia en el segundo campo. 

//Se debe almacenar el texto convertido  verificando que el texto no exista previamente en el array, sino informar del error en un párrafo. Luego de cada ingreso exitoso invocar a la función de la parte 3).

//Crear una función que recorra todo el array y muestre en un párrafo los textos que tengan más de una letra. Se debe mostrar una palabra por línea.
document.querySelector("#btnMostrar").addEventListener("click", ingresar);

let textosMods = [];

function ingresar(){
    
    let texto = document.querySelector("#txtTexto").value;
    let posicion = Number(document.querySelector("#txtPosicion").value);
    let textoTrans = transformar(texto, posicion);
    let aparece = false

    for(let i = 0 ; i < textosMods.length ; i++){
        if (textoTrans === textosMods[i]){
            aparece = true;
            break;
        }
    }


    if (aparece){
        document.querySelector("#pRespuesta").innerHTML = "Ese texto ya existe, ingrese otro.";
    }else{
        textosMods.push(textoTrans);
        document.querySelector("#pRespuesta").innerHTML = "";
        mostrar(textosMods);
    }
}

function mostrar(textos){
    for(let i = 0 ; i < textos.length ;  i++){
        document.querySelector("#pRespuesta").innerHTML += textos[i] + "<br>";
    }
}


function transformar(texto, num){
    let textoTrans = "";
    for (let i = 0 ; i < texto.length ; i++){
        if (i % num === 0){
            textoTrans += texto[i];
        }
    }
    return textoTrans;
}