/*
 Esse script contém a lógica necessária para o funcionamento do carrossel
 de imagens que estamos implementando. É baseado em um cursor que controla
 o índice da imagem atualmente visível e duas abas onde cliques são efetuados
 que incrementam ou decrementam o índice do cursor para navegar pelas imagens.
 */

// Array que contém as URLs das imagens do carrossel
let img_urls = [
    "https://scontent.fpoa10-1.fna.fbcdn.net/v/t1.6435-9/90154557_808948019613612_7744549079547379712_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ecq2ihUqlEYQ7kNvwEz2gV7&_nc_oc=AdmkNToFLwic91Hb-pZcu8X2hv-PZgVv_kVKKyr6pSFX5xjmLWH055yPinavjgzq_LI&_nc_zt=23&_nc_ht=scontent.fpoa10-1.fna&_nc_gid=c1jkp5P55Cp4s9nIKviQdw&oh=00_Afjl5h-uHi1E0o4R01_6C1P4hMSZ-xCQkoLoeqeOdTWO2Q&oe=69349E9C",
    "https://i.superesportes.com.br/74IC6QMXkRLlmCdCW7HyazIejzU=/650x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2023/03/24/3991317/roger-roubou-a-cabeca-do-raposao-apos-marcar-gol-em-estreia-pelo-cruzeiro-no-classico-contra-o-atletico_1_51985.jpg",
    "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-6/498592368_23925949767037673_1113487144935782358_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ePxoc3lBze0Q7kNvwEudRab&_nc_oc=AdkM36i6CB817c1Z5vwHAjxW1H1ManwNu5t5sxH6VxQkltIRqEPb6t4SEXa5_ukgDUc&_nc_zt=23&_nc_ht=scontent.fpoa10-1.fna&_nc_gid=EsOcjd-HoA-3ZvFcXZPfAw&oh=00_Afh7foHparoCjn7mDSF61D-jDYtFePI-OfPULsKkwJ1aCw&oe=6912E797",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaW6CZvDj3bNvbEFMF8wl41uwtSlk3UskGg&s"
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
