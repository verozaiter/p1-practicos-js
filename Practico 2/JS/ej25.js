let stock, nombre, mayorComprador, unidadesCompra;
let mayorCompra = Number.NEGATIVE_INFINITY;
let pedidos = 0;


document.querySelector("#btnComprar").addEventListener("click", comprar);

function comprar(){
    stock = Number(document.querySelector("#txtStockInicial").value);
    document.querySelector("#txtStockInicial").setAttribute("disabled", "disabled");
    nombre = document.querySelector("#txtNombre").value;
    unidadesCompra = Number(document.querySelector("#txtCantidad").value);
    
    if (unidadesCompra <= stock){
        stock -= unidadesCompra;
        pedidos ++;

        if (unidadesCompra > mayorCompra){
            mayorCompra = unidadesCompra;
            mayorComprador = nombre;
        }

    }else{
        document.querySelector("#pResultado"). innerHTML = "Su pedido supera la cantidad de stock disponible."
    }
    
    if(stock === 0){
        document.querySelector("#btnComprar").setAttribute("disabled", "disabled");
        document.querySelector("#pResultado").innerHTML = "El cliente que compró más cantidad de cámaras en un pedido fue " + mayorComprador + ". Los pedidos realizados fueron " + pedidos + ".";
    }

    document.querySelector("#txtStockInicial").value = stock;

}