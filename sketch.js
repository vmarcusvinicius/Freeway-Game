function setup() {
  createCanvas(500, 400);
  trilha.loop();
}
  
  function draw() {
    background(imgEstrada);
    //ator
    mostraAtor();
    /// se 2 player for ligado desliga isso
    // movimentaAtor();
    // movimentaLados(); // movimentar para os lados
    ////
    
    // 2 players 
    movimentaAtorP1();
    movimentaLadosP1(); // movimentar para os lados
    mostraAtorP2();
    verificaColisaoP2();
    incluiPontosP2();
    darPontosP2();
    movimentaAtorP2();
    movimentaLadosP2(); // movimentar para os lados
    
    
    verificaColisao();
    incluiPontos();
    darPontos();
    //carro
    mostraCarros();
    movimentaCarros();
    voltaCarros();
  }