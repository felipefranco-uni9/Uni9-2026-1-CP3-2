let contador = 0;

const elementoNumero = document.getElementById('numero');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const btnZerar = document.getElementById('btnZerar');


function atualizarTela() {
   
    elementoNumero.textContent = contador;

    if (contador > 0) {
        elementoNumero.style.color = "green"; // Positivo fica verde
    } else if (contador < 0) {
        elementoNumero.style.color = "red"; // Negativo fica vermelho
    } else {
        elementoNumero.style.color = "black"; // Zero volta para a cor normal
    }
}

btnIncrementar.addEventListener('click', function() {
    contador++; // Isso é o mesmo que fazer: contador = contador + 1
    atualizarTela();
});

btnDecrementar.addEventListener('click', function() {
    contador--; // Isso é o mesmo que fazer: contador = contador - 1
    atualizarTela();
});

btnZerar.addEventListener('click', function() {
    contador = 0; // Volta a variável para zero
    atualizarTela();
});
