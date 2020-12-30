var fixedRect, movingRect;
var ball, surface;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ball=createSprite(600,100,50,40);
  surface=createSprite(200,100,100,80);
  surface.shapeColor="yellow";
  ball.velocityX=-4;
}

function draw() {
  background(0,0,0);  
bounceoff(ball,surface);
  drawSprites();
}