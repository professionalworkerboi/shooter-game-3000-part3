var shooter,asteroids,rareAsteroid;

var gameState = "start";

function preload(){
  bgImg = loadImage("images/space v2.jpg");
}

function setup() {
  createCanvas(windowWidth-5,windowHeight-5);
  shooter = createSprite(displayWidth/2,displayHeight/1.35, 50, 50);
  shooter.shapeColor = "green";
  astGroup = new Group();
  planetGroup = new Group();
  starGroup = new Group();
  laserGroup = new Group();
}

function draw() {
  background(bgImg);
  if(gameState === "start"){
    textSize(50);
    fill("white");
    text("With the help of 'S' start the game",displayWidth/3.5,displayHeight/3.5);
    shooter.visible = false; 
    if(keyCode === 83){
      gameState = "play";
    }
  }
  else if(gameState === "play"){
    shooter.visible = true;
    asteroids();
    planets();
    stars();
    if(keyDown(UP_ARROW)){
      shooter.y = shooter.y - 30;
    }
    
    if(keyDown(DOWN_ARROW)){
      shooter.y = shooter.y + 30;
    }

    if(keyDown(RIGHT_ARROW)){
      shooter.x = shooter.x + 30;
    }

    if(keyDown(LEFT_ARROW)){
      shooter.x = shooter.x - 30;
    }

    if(keyDown("space")){
      Laser();
      laser.velocityY =  - 5;
    }
    if(astGroup.isTouching(laserGroup)){
      for(var i = 0; i < astGroup.lenght; i++){
        if(astGroup[i].isTouching(laserGroup)){
          astGroup[i].destroy();
          laserGroup.destroyEach();
        }
      }

    }
  }
  drawSprites();
  
  
}

function Laser(){
  laser = createSprite(displayWidth/2,displayHeight/1.35,50,50);
  laser.shapeColor = "blue";
  laser.x = shooter.x;
  laser.y = shooter.y;
  laser.depth = shooter.depth;
  shooter.depth += 1;
  laser.lifetime = 200;
  laserGroup.add(laser);
} 

function asteroids(){
  if(frameCount%20===0){
    asteroid = createSprite(90,-10,50,50);
    asteroid.shapeColor = "gray";
    asteroid.x = random(0,displayWidth-9);
    asteroid.velocityY = +5; 
    asteroid.lifetime=200;
    astGroup.add(asteroid);
  }
}

function stars(){
if(frameCount%500===0){
  star = createSprite(90,-10,300,300);
  star.shapeColor = "gold";
  star.x = random(0,displayWidth-10);
  star.velocityY = 50;
  star.lifetime = 300;
  starGroup.add(star);
}
}

function planets(){
if(frameCount%100===0){
  planet = createSprite(90,-10,100,100);
  planet.shapeColor = "brown";
  planet.x = random(0,displayWidth - 9);
  planet.velocityY = +2.5;
  planet.lifetime = 300;
  planetGroup.add(planet);
}
}

