/*
 Esse script contém a lógica necessária para o funcionamento do carrossel
 de imagens que estamos implementando. É baseado em um cursor que controla
 o índice da imagem atualmente visível e duas abas onde cliques são efetuados
 que incrementam ou decrementam o índice do cursor para navegar pelas imagens.
 */

// Array que contém as URLs das imagens do carrossel
let img_urls = [
    "img/1.jpg",
    "img/2.webp",
    "img/3.jpg",
    "img/4.jpg"
];

// Índice da imagem atualmente visível
let cursor = 0;

// função para atualizar a imagem exibida com base no cursor
function atualizaImagem() {
    let img = document.querySelector("#carousel-image");
    img.src = img_urls[cursor];
}

// Função para avançar para a próxima imagem
function proximaImagem() {
    cursor++;
    if (cursor >= img_urls.length) {
        cursor = 0; // Volta para a primeira imagem se estiver na última
    }
    atualizaImagem();
}

// Função para voltar para a imagem anterior
function imagemAnterior() {
    cursor--;
    if (cursor < 0) {
        cursor = img_urls.length - 1; // Vai para a última imagem se estiver na primeira
    }
    atualizaImagem();
}

// Adiciona event listeners (on clicks) às abas de navegação
let abaEsquerda = document.querySelector("#left");
abaEsquerda.addEventListener("click", imagemAnterior);
let abaDireita = document.querySelector("#right");
abaDireita.addEventListener("click", proximaImagem);

// Atualiza a imagem inicial ao carregar a página
window.onload = atualizaImagem;
