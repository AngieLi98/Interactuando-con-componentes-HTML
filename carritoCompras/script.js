function agregar(productos) {
    let contadorProdcuto = document.getElementById(`total-${productos}`);
    let total = parseInt(contadorProdcuto.innerText);
    total += 1
    contadorProdcuto.innerText = total
}