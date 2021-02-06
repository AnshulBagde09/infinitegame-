var tower,towerImg;
var door,doorImg,doorGroup;
var climber,climberImg,climberGroup,invi,inviGroup;
var ghost,ghostImg;


function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");


}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  
  doorGroup=new Group();
  climberGroup=new Group();
  inviGroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.4;
  
  
}

function draw(){
  if(tower.y>400){
    tower.y=300;
  }
 
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  
  
  
  spawndoors();
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
  
  if(inviGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  
  
  drawSprites();
  
  
}

function spawndoors(){
  if(frameCount%300===0){
    door=createSprite(200,-50);
    door.addImage(doorImg);
    door.velocityY=1;
    door.x=Math.round(random(120,400));
    door.lifetime=700;
    doorGroup.add(door);
    
    climber=createSprite(200,10);
    climber.addImage(climberImg);
    climber.velocityY=1;
    climber.x=door.x;
    climber.lifetime=700;
    climberGroup.add(climber);
    
    invi=createSprite(200,15,climber.Width,2);
    invi.x=door.x;
    invi.velocityY=1;
    invi.lifetime=700;
    inviGroup.add(invi);
    invi.debug=true;
  
    door.depth=ghost.depth;
    ghost.depth=ghost.depth+1;
  }
  
}