document.querySelector("#btnMostrar").addEventListener("click", mostrar);

function mostrar(){
    let num1 = Number(document.querySelector("#txtNum1").value);
    let num2 = Number(document.querySelector("#txtNum2").value);
    let primerMult = "";

    if (num1 < num2){
        for (i = num1 ; i <= num2 ; i++){
            if (i % 4 === 0 && i % 6 === 0 && primerMult === ""){
                primerMult = i;
            }
        }
    } else if (num2 < num1){
        for (i = num1 ; i >= num2 ; i--){
            if (i % 4 === 0 && i % 6 === 0 && primerMult === ""){
                primerMult = i;
            }
        }
    }

   /*  if (num1 < num2){
        for (i = num1 ; i <= num2 ; i++){
            if (i % 4 === 0 && i % 6 === 0){
                primerMult = i;
                break;
            }
        }
    } else if (num2 < num1){
        for (i = num1 ; i >= num2 ; i--){
            if (i % 4 === 0 && i % 6 === 0){
                primerMult = i;
                break;
            }
        }
    } */



    

    document.querySelector("#pResultado").innerHTML = primerMult;
}
