var fundoImg, fundo;
var balaoImg, balao;
var moedaImg, moeda;
var alienImg, alien;

var moedaGroup;
var alienGroup;

var score = 0;
var life = 3;


function preload() {

   fundoImg = loadImage("fundo.jpg");
   balaoImg = loadImage("balao1.png");
   moedaImg = loadImage("moeda.png");
   alienImg = loadImage("alien.png");

}


function setup() {
  createCanvas(800,800);
  fundo = createSprite(400, 400);
  fundo.addImage(fundoImg);
  fundo.scale = 1.8;

  balao = createSprite(400,700);
  balao.addImage(balaoImg);
  balao.scale = 0.3;

  moedaGroup = new Group();
  alienGroup = new Group();
  
}

function draw() {
  background(fundoImg); 
  if(keyDown  ("LEFT_ARROW") ){
    balao.x = balao.x -30;

  } 
  if(keyDown  ("RIGHT_ARROW") ){
    balao.x = balao.x +30;

  } 
  if(keyDown  ("UP_ARROW") ){
    balao.y = balao.y -30;

  } 
  if(keyDown  ("DOWN_ARROW") ){
    balao.y = balao.y +30;

  } 
 
  //adicionando gravidade
  balao.y = balao.y +2;


  fundo.velocityY = 4;
  

  if (fundo.y > 800) {
     fundo.y = 0;
  }

  // destruir moeda quando o balão tocar e aumentar a potuação
  

  dindin();
  et();
  drawSprites();

}

function dindin(){
  if(frameCount% 20 === 0){
  moeda = createSprite(random(100,600),random(50,100),40,40);

  moeda.addImage(moedaImg);
  moeda.scale = 0.05;
  moeda.velocityY = 5;
  moeda.deBug = true;
  moeda.setCollider("rectangle", 0,0,400,400);

  moeda.lifetime = 90;
  moedaGroup.add(moeda);
  }
  
}

function et(){
  if(frameCount% 20 === 0){
  alien = createSprite(random(50,750),random(50,100),40,40);

  alien.addImage(alienImg);
  alien.scale = 0.2;
  alien.velocityY = 5;
  alien.deBug = true;
  alien.setCollider("rectangle", 0,0,400,400);

  alien.lifetime = 200;
  alienGroup.add(alien);
  }
  
}

