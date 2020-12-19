var crop, crop1, crop2, crop3, crop4;
var particle;


function setup() {
  createCanvas(800,800);

  particle = createSprite(400,50,20,20);
  particle.velocityY = 5;
  
}
function draw() {
  createCanvas(800,800)
  background(0)

  
  for (var i = 50; i < 800; i=i+50) {
    crop = createSprite(i,100,20,20);
    crop.shapeColor = 'green';
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop1 = createSprite(i,200,20,20);
    crop1.shapeColor = 'red';
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop2 = createSprite(i,300,20,20);
    crop2.shapeColor = 'purple';
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop3 = createSprite(i,400,20,20);
    crop3.shapeColor = 'white';
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop4 = createSprite(i,500,20,20);
    crop4.shapeColor = 'orange';
  }

  particle.collide(crop);
  
  drawSprites();
}
  
