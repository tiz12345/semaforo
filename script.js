// Função para ligar o vermelho
function ligarVermelho() {
  document.getElementById("imgSemaforo").src = "imagens/vermelho.jpg";
}

// Função para ligar o amarelo
function ligarAmarelo() {
  document.getElementById("imgSemaforo").src = "imagens/amarelo.jpg";
}

// Função para ligar o verde
function ligarVerde() {
  document.getElementById("imgSemaforo").src = "imagens/verde.jpg";
}

// Função para desligar o semáforo
function desligar() {
  document.getElementById("imgSemaforo").src = "imagens/desligado.png";
}