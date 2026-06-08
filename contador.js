// Passo 3: Criar a variável contador iniciando em 0
let contador = 0;

// Selecionando os elementos do HTML para o JS conseguir manipulá-los
const elementoNumero = document.getElementById('numero');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const btnZerar = document.getElementById('btnZerar');

// Função extra para não repetir código: ela atualiza o texto na tela e checa a cor
function atualizarTela() {
    // Passo 5: Atualiza o textContent do h1
    elementoNumero.textContent = contador;

    // Passo 6 (Bônus): Muda a cor dependendo do valor
    if (contador > 0) {
        elementoNumero.style.color = "green"; // Positivo fica verde
    } else if (contador < 0) {
        elementoNumero.style.color = "red"; // Negativo fica vermelho
    } else {
        elementoNumero.style.color = "black"; // Zero volta para a cor normal
    }
}

// Passo 4: Adicionando o addEventListener("click") em cada botão

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
