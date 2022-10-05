document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular(){
    //let cantHoras = Number(document.querySelector("#txtHorasTrabajo").value);
    let cantHoras = document.querySelector("#txtHorasTrabajo").value;
    //let cantDias = Number(document.querySelector("#txtDiasTrabajo").value);
    let cantDias = document.querySelector("#txtDiasTrabajo").value;
    //let costoMateriales = Number(document.querySelector("#txtCostoMateriales").value);
    let costoMateriales = document.querySelector("#txtCostoMateriales").value;

    if (corroborarNumero(cantHoras) && corroborarNumero(cantDias) && corroborarNumero(costoMateriales)){   

        let asistente = document.querySelector('#slcAsistente').value;
        let presupuesto;
        
        presupuesto = costoTotalSalario("e", cantHoras, cantDias) + costoTotalSalario(asistente, cantHoras, cantDias) + costoFinalMateriales(costoMateriales);
        
        document.querySelector("#pRespuesta").innerHTML = "Total final del presupuesto: $" +  presupuesto;
    }else{
        document.querySelector("#pRespuesta").innerHTML = "Chequeate si pusiste bien los datos my friend";
    }
        
}



function corroborarNumero(num){
    return !isNaN(num) && num >=0 ;
}

function costoTotalSalario (tipoUsuario, cantHoras, cantDias){
    let salario = 0;

    if (tipoUsuario === "e"){
        salario = 200 * cantHoras * cantDias;
    }
    if (tipoUsuario === "a"){
        salario = 150 * cantHoras * cantDias;
    }

    return salario;
}

function costoFinalMateriales(costoMateriales){
    let costoFinal = costoMateriales * 1.1;

    return costoFinal;
}
