// Crear una función que reciba como parámetro un array de números y devuelva un nuevo array con los elementos que sean mayores o iguales al primero. 

function mayoresOigualesAlPrimero(arrayNumerico){
    let nuevoArray = [];
    for (let i = 0 ; i < arrayNumerico.length ; i++){
        if(arrayNumerico[i] >= arrayNumerico[0]){
            nuevoArray.push(arrayNumerico[i]);
        }
    }
    return nuevoArray;
}