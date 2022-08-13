var sky, skyImg;
var superhero, superheroImg;
var coins, Coins, coinsGroup, coinsImg;

function preload(){
  skyImg = loadImage("sky.png");
  superheroImg = loadImage("superhero.png");
  coinsImg = loadImage("yellowcoin.png");
}

function setup(){
  createCanvas(600,600);
  
  sky=createSprite(600,600);
  sky.addImage(skyImg);
  sky.velocityY = 4;
  sky.scale=1.2;

  superhero = createSprite(180,340,30,30);
  superhero.addImage(superheroImg);
  superhero.scale=0.5;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;

  coinsGroup = new Group();
}

function draw() {
  background(0);
  sky.velocityY = 4;
  
  superhero.x = World.mouseX;

  edges = createEdgeSprites();
  superhero.collide(edges[3]);
  superhero.collide(leftBoundary);
  superhero.collide(rightBoundary);
  
  if(sky.y > 400 ){
    sky.y = height/2;
  }

  spawnCoins();
  drawSprites();
}

function spawnCoins() {
  var coins = createSprite(400,120,40,10);
  coins.y = Math.round(random(80,120));
  coins.addImage(coinsImg);
  coins.scale = 0.05;
  coins.velocityY = 3;
  
   //assign lifetime to the variable
  coins.lifetime = 200;
  
  //add each cloud to the group
  coinsGroup.add(coins);
}
