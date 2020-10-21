var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");                               
}

function setup(){
  createCanvas(400,400);
  
  var survivalTime = 0;
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground =  createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255)
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  Food();
  obstacle();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  drawSprites();
}

function Food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,100,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(160,210));
    banana.velocityX = -2;
    banana.lifetime = 200;
    banana.scale = 0.1;
    FoodGroup.add(banana);          
  }  
}
  
function obstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,329,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -2;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);          
  }
}