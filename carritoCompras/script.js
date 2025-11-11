function agregar(producto) {
    let contadorProducto = document.getElementById(`total-${producto}`);
    let precioProducto = document.getElementById(`precio-${producto}`);
    let suma = document.getElementById("total-precio");

    let cantidadProducto = parseInt(contadorProducto.innerText);
    let precio = parseInt(precioProducto.innerText);
    let total = parseInt(suma.innerText);

    cantidadProducto += 1
    total += precio

    contadorProducto.innerText = cantidadProducto
    suma.innerHTML = total

    if(suma.innerHTML > 50){
        alert("¡Envío gratis aplicado!")
    }
}

function vaciar() {
    let contadores = document.getElementsByClassName("contador");

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].innerText = 0;
    }

    document.getElementById("total-precio").innerText = 0;

    alert("Carrito vaciado")
}

