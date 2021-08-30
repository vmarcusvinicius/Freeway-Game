let xAtorP2 = 366;
let yAtorP2 = 366;
let tamanhoDoAtorP2 = 30;
let pontosP2 = 0;

let colisaoP2 = false;

function mostraAtorP2() {
  image(imgAtor, xAtorP2, yAtorP2, tamanhoDoAtorP2, tamanhoDoAtorP2);
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

function movimentaAtorP2() {
  // cima e baixo
  if (keyIsDown(UP_ARROW)) {
    yAtorP2 -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMoverP2()) {
      yAtorP2 += 3;
    }
  }
}

function movimentaLadosP2() {
   
  /// direita esquerda
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMoverEsquerdaP2()) {
      xAtorP2 -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMoverDireitaP2()) {
      xAtorP2 += 3;
    }
  } ///
}

function verificaColisaoP2() {
  for (let i = 0; i < imgCarros.length; i++) {
    colisaoP2 = collideRectCircle(xCarros[i], yCarros[i], tamanhoDosCarros[0], tamanhoDosCarros[1], xAtorP2, yAtorP2, 15);
    if (colisaoP2) {
      colidir.play();
      voltaAtorP2();
      if (sePontosMaiorQueZeroP2()) {
        pontosP2--;
      }
    }
  }
}

function incluiPontosP2() {
  textAlign(CENTER);
  textSize(25);
  fill(color(230, 230, 57))
  text(pontosP2, 366+14, 28);
}

function darPontosP2() {
  if (yAtorP2 <= 15 ) {
    pontos.play();
    pontosP2++;
    voltaAtorP2();
  }
}

function podeSeMoverP2() {
  return yAtorP2 < 366;
}

function podeSeMoverEsquerdaP2() {
  return xAtorP2 > 0
}

function podeSeMoverDireitaP2() {
  return xAtorP2 < 471
}

function sePontosMaiorQueZeroP2() {
  return pontosP2 > 0
}

function voltaAtorP2() {
  xAtorP2 = 366;
  yAtorP2 = 366;
}

