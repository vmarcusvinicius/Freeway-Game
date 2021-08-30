let xAtor = 88;
let yAtor = 366;
let tamanhoDoAtor = 30;
let meusPontos = 0;

let colisao = false;

function mostraAtor() {
  image(imgAtor, xAtor, yAtor, tamanhoDoAtor, tamanhoDoAtor);
}

function movimentaAtor() {
  // cima e baixo
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function movimentaLados() {
   
  /// direita esquerda
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMoverEsquerda()) {
      xAtor -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMoverDireita()) {
      xAtor += 3;
    }
  } ///
}

function movimentaAtorP1() {
  // cima e baixo
  if (keyIsDown(87)) {
    yAtor -= 3;
  }
  if (keyIsDown(83)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function movimentaLadosP1() {
   
  /// direita esquerda
  if (keyIsDown(65)) {
    if (podeSeMoverEsquerda()) {
      xAtor -= 3;
    }
  }
  if (keyIsDown(68)) {
    if (podeSeMoverDireita()) {
      xAtor += 3;
    }
  } ///
}

function verificaColisao() {
  for (let i = 0; i < imgCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], tamanhoDosCarros[0], tamanhoDosCarros[1], xAtor, yAtor, 15);
    if (colisao) {
      colidir.play();
      voltaAtor();
      if (sePontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(230, 230, 57))
  text(meusPontos, width / 5, 28);
}

function darPontos() {
  if (yAtor <= 15 ) {
    pontos.play();
    meusPontos++;
    voltaAtor();
  }
}

function podeSeMover() {
  return yAtor < 366;
}

function podeSeMoverEsquerda() {
  return xAtor > 0
}

function podeSeMoverDireita() {
  return xAtor < 471
}

function sePontosMaiorQueZero() {
  return meusPontos > 0
}

function voltaAtor() {
  xAtor = 88;
  yAtor = 366;
}

