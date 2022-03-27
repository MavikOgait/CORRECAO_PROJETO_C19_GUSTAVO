var bird, birdiImg;
var tower;
var ground, ground2;
var backgroundImg, fundo; //----
var grupo_obst, obstaculo;
var score;
var PLAY=1;
var FIM=0;
var estadojogo=PLAY;
var reset;
 
//VOCÊ ESQUECEU DE CRIAR A VARIÁVEL GAME OVER E RESTART QUE FOI USADA NO CÓDIGO.

//CUIDADO, A VARIAVEL EM QUE VOCÊ ADICIONA A IMAGEM É DIFERENTE DA QUE VC CRIA SPRITE!

function preload(){
birdiImg = loadImage("passaro.png");      //TROQUEI O NOME POIS ESTAVA IGUAL AO NOME DA SPRITE
obstaculoImg = loadImage("cano.png");     //TROQUEI O NOME POIS ESTAVA IGUAL AO NOME DA SPRITE
backgroundImg = loadImage("fundo.jpg");  //TROQUEI O NOME POIS ESTAVA IGUAL AO NOME DA SPRITE

}

function setup() {


//ARRUMEI O PROBLEMA DA TELA, AGORA ELA ESTÁ APARECENDO, COLOQUEI UM TAMANHO FIXO PARA O CANVAS 
//(É MELHOR INICIAR COM UM TAMANHO FINITO DO QUE COLOCAR DIRETO DO TAMANHO DA TELA.)

 createCanvas(300,500);
 
 fundo = createSprite(250,250,400,20);
 fundo.addImage( backgroundImg);
 fundo.scale = 2.5;

  

//ALTEREI A POSIÇÃO DO CHÃO E DO TETO. eM X DEIXEI NO CENTRO DA TELA E EM Y COLOQUEI NAS EXTREMIDADES. 
//TORNEI O CHÃO E O TETO INVISÍVEIS

  //criando o chão
  ground =createSprite(250,500,500,10);
  ground.visible = false

  //criando o teto
  ground2 =createSprite(250,0,500,20);
  ground2.visible = false


//CRIEI UM SPRITE PARA O SEU PÁSSARO, PARA QUE VOCÊ CONSIGA COLOCA-LO NA TELA
//aDICIONEI A IMAGEM INDICADA
//A IMAGEM ESCOLHIDA PARA O PÁSSARO TEM UM FUNDO, LOGO FICA ESSES QUADRADINHOS BRANCOS AO EXECUTAR 
//PARA O JOGO FICAR VISUALMENTE MELHOR ACHE UMA IMAGEM NO Google QUE SEJA .PNG


  //criando o passaro    
  bird = createSprite(50,160,20,50);
  bird.addImage(birdiImg)
  bird.scale = 0.3;




  //criando os grupos dos obstaculos
  grupo_obst=createGroup();

  //criando a pontuação
score=0;


};





function draw() {
//ADICIONEI UM BACKGROUND SOMENTE PARA VISUAALIZAR O FUNDO
background("black");

//TIREI A PARTE DO TOUCH, NO FINAL ACRESCENTA ESSAS INFORMAÇÕES.
//FOCAR NA PRODUÇÃO DO JOGO

  //pular quando a seta for pressionada
  if  ( keyDown("Space")){
    bird.velocityY = -14 ;
  }


//GRAVIDADE
  bird.velocityY = bird.velocityY + 1;


//PARA O PASSARINHO RECONHECER O CHÃO E O TETO
  bird.collide(ground);
  bird.collide(ground2);  
    
  criar_obstaculos()


//O CÓDIGO QUE VOCÊ ESCREVEU ABAIXO PODE SER LIDO DA SEGUINTE FORMA: (CONFERIR NO SEU CÓDIGO, AQUI EU JÁ ARRUMEI)
//"Se o bird tocar nos obstáculos/chao/teto, o estado do jogo é FIM"
//"Se ele não tocar (else) o estado do jogo é FIM"
//LOGO, SEMPRE O ESTADO DO JOGO SERÁ FIM
//PARA RESOLVER EU SÓ TIREI O "else"




  if (grupo_obst.isTouching(bird) || ground.isTouching(bird) || ground2.isTouching(bird)){
    estadojogo = FIM;   
  }

  if(estadojogo == FIM){

    ground.velocityX=0;
    background.setVelocityX=0;
    grupo_obst.setVelocityXEach(0);

    //definir tempo de vida
    grupo_obst.setLifetimeEach(-4);

//TROCAR "trex" POR "bird"
    bird.velocityY=0  





//----------------------------------------------------------------------------------
//ESSAS VARIÁVEIS NÃO EXISTEM(GAMEOVER E RESTART)(NÃO TEM A IMAGEM DE CADA UMA TAMBÉM)   
//FAZER IGUAL AO DO TREX

    /*
    deixar visivel o gameover e o restart.
    gameover.visible=true;
    restart.visible=true;

    
    if (mousePressedOver(restart)){
    reset();
    }
   */
  

//ESSA IMAGEM NÃO EXISTE NO CÓDIGO(ABAIXO)

    //bird.changeAnimation("morto",dead_bird); 
    
///--------------------------------------------------------------------------




  }




 drawSprites();
};




//MUDEI O VALOR DA ALTURA DA VARIÁVEL "NUMERO" PARA 500
//MUDEI O VALOR DA POSIÇÃO X DO SPRITE "OBSTACULO"
//MUDEI O VALOR DO LIFETIME
//VOCÊ ESQUECEU DE CHAMAR A FUNÇÃO "criar_obstaculos" NO DRAW
//VELOCIDADE MUITO ALTA!!
// IMAGEM DO OBSTÁCULO NÃO ESTÁ EM PNG
//SERIA IDEAL DUAS IMAGENS DIFERENTES, UM CANO EM CIMA E OUTRO CANO EM BAIXO,
// POIS DESSA FORMA PODEREMOS ANALISAR A COLISÃO, E O PÁSSARO IRÁ PASSAR ONDE NÃO TEM IMAGEM
//AJUSTEI A PROFUNDIDADE PARA O PÁSSARO FICAR SEMPRE NA FRENTE DO OBSTÁCULO.
//DEPOIS QUE VOCÊ ACHAR DUAS IMAGENS DIFERENTES, VOCÊ ALEATORIZA A ALTURA DELAS.

//criando obstaculos
//numero =Math.round(random(50,(500/8)*7));

function criar_obstaculos(){  
    if (frameCount % 65 == 0){
       obstaculo =createSprite(320,250,10,40);
       obstaculo.addImage(obstaculoImg)
       obstaculo.velocityX=-(5);
       obstaculo.lifetime=340;
       grupo_obst.add(obstaculo);

// AJUSTE DE PROFUNDIDADE

      obstaculo.depth = bird.depth;
      bird.depth = bird.depth + 1;
    };
};



/*
function reset(){

    score=0;
    estadojogo = PLAY;
    grupo_obst.destroyEach();
    gameover.visible=false;
    restart.visible=false;
    bird.changeAnimation("passaro", bird);
}
*/