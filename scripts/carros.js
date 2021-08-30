// carro variaveis
let xCarros = [600, 650, 600, 550, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [7, 2.3, 3, 5, 3.5, 2.7];
let distanciaResets = [-50, 600]; 
// -50 = distancia para o reset // 600 = distancia pós reset

let tamanhoDosCarros = [60, 40];
// 60 = largura do carro // 40 altura drro

function mostraCarros() {
  for (let i = 0; i < imgCarros.length; i++) {
    image(imgCarros[i], xCarros[i], yCarros[i], tamanhoDosCarros[0], tamanhoDosCarros[1])
  }
}

function movimentaCarros() {
  for (let i = 0; i < imgCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarros() {
  for (let i = 0; i < imgCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = distanciaResets[1];
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < distanciaResets[0]
}