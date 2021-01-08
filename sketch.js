var car,wall;
var speed,weight;

function setup() {
createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
car=createSprite(1500, 200, 50, 50);
car.velocityX=speed;
wall = createSprite(100,200,60,400/2);
}

function draw() {
background("black");  
drawSprites();
wall.shapeColor(80,80,80);

if(wall.X-car.X <= car.width/2+wall.width/2){

  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  
  if(deformation>180){
  car.shapeColor =(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = (230,230,0);
  }
  if(deformation<100){
    car.shapeColor = (0,255,0);
  }
  
  }
  
  }