var shooter,asteroids,rareAsteroid;

function setup() {
  createCanvas(windowWidth-5,windowHeight-5);
  shooter = createSprite(displayWidth/2,displayHeight/1.35, 50, 50);

}

function draw() {
  background(255,255,255);  
  
  if(keyDown(UP_ARROW)){
    shooter.y = shooter.y - 10;
  }
  
  if(keyDown(DOWN_ARROW)){
    shooter.y = shooter.y + 10;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x + 10;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x - 10;
  }

  if(keyDown("space")){
    Laser();
    laser.velocityY =  - 5;
  }
  drawSprites();
  
}

function Laser(){
  laser = createSprite(displayWidth/2,displayHeight/1.35,50,50);
  laser.x = shooter.x;
  laser.y = shooter.y;
} 