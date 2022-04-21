var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obstacleImg1, obstacleImg2;
var spawnObstaclebottom, obsbottomImg1, obsbottomImg2, obsbottomImg3;

function preload(){
bgImg = loadImage("assets/bg.png");
obstacleImg1= loadImage("assets/obsTop1.png");
obstacleImg2= loadImage("assets/obsTop2.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
obsbottomImg1= loadImage("assets/obsBottom1.png");


}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.velocityX=-5


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          if(bg.x<10){
            bg.x=200
          }
          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   balloon.collide(bottomGround);
   balloon.collide(topGround);
        
   spawnObstaclesTop();
   drawSprites();
        
}

function spawnObstaclesTop(){

if(World.frameCount % 120 === 0){
  
 obstacleTop=createSprite(400,50,50,50);

obstacleTop.scale=0.1;
obstacleTop.velocityX= -3;
var rand = Math.round(random(1,2));
switch(rand){
  case 1:  obstacleTop.addImage(obstacleImg1);
  break;

  case 2:  obstacleTop.addImage(obstacleImg2);
  break;
  default: break;
}


obstacleTop.lifetime= 100;
balloon.depth=obstacleTop.depth+1


}


}