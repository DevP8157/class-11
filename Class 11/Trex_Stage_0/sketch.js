
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(3200,1600)
  trex = createSprite(200,200,33,33);
  trex.addAnimation("running", trex_running);

  
}

function draw(){
  background("white")
  drawSprites();

}
