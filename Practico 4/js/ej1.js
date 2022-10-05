document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    n1 = Number(document.querySelector("#txtValor1").value);
    n2 = Number(document.querySelector("#txtValor2").value);
    let nump = cuantosParesEntre(n1, n2);

    document.querySelector("#pRespuesta").innerHTML = nump;
}


function cuantosParesEntre(n1, n2){
    let np = 0;

    if(n1 > n2){
        let aux = n1;
        n1 = n2;
        n2 = aux;
    }

    for(let i = n1 ; i <= n2 ; i++){
        if((i % 2) === 0){
        np += 1 ;
        }
    }
    return np
   
}