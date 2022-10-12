document.querySelector("#btnAgregar").addEventListener("click", agregarYmostrar);

let arrayNum = [];

function agregarYmostrar(){
    let num = Number(document.querySelector("#txtNum").value);
    document.querySelector("#txtNum").value = "";
    document.querySelector("#txtNum").focus();
    arrayNum.push(num);
    
    let nuevoArray = mayoresA20(arrayNum);

    document.querySelector("#pRespuesta").innerHTML = ""; 
    for (let i = 0 ; i < nuevoArray.length ; i++){
        document.querySelector("#pRespuesta").innerHTML += nuevoArray[i] + "<br>"
    }
    
}

function mayoresA20(array){
    let nuevoArray = [];
    for (let i = 0 ; i < array.length ; i++){
        if(array[i] > 20){
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

