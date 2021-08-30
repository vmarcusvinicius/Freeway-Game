let imgEstrada;
let imgAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;
let imgCarros;

let colidir;
let pontos;
let trilha;

function preload() {
  imgEstrada = loadImage('imagens/estrada.png');
  imgAtor = loadImage('imagens/ator-1.png');
  imgCarro = loadImage('imagens/carro-1.png');
  imgCarro2 = loadImage('imagens/carro-2.png');
  imgCarro3 = loadImage('imagens/carro-3.png');
  
  imgCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro2, imgCarro, imgCarro3];
  
  colidir = loadSound("sons/colidiu.mp3");
  pontos = loadSound("sons/pontos.wav");
  trilha = loadSound("sons/trilha.mp3");
}