function votos(lenguaje) {
    let contadorVotos = document.getElementById(`votos-${lenguaje}`);
    let contador = parseInt(contadorVotos.innerText);
    contador += 1;
    contadorVotos.innerText = contador;
    alert("¡Gracias por tu voto!")

    if (contadorVotos.innerText % 5 === 0) {
        console.log(`votos-${lenguaje} : ${contadorVotos.innerText}`);
    }
}