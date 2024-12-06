
const botoes = document.querySelectorAll(".botao-menu");
const imagemCopo = document.querySelector(".imagem-copo");
const circulo = document.querySelector(".circulo");

// Adiciona evento de clique a cada botão do menu
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // Altera a imagem do copo
        const novaImagem = botao.getAttribute("data-img");
        imagemCopo.src = novaImagem;

        // Altera a cor do círculo
        const novaCor = botao.getAttribute("data-color");
        circulo.style.background = novaCor;
    });
});
