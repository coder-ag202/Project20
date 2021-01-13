
var canvas, canvasImg;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
canvasImg = loadImage("images/garden.png");
tomImg1 = loadAnimation("images/tomOne.png");
tomImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
tomImg3 = loadAnimation("images/tomFour.png");
jerryImg1 = loadAnimation("images/jerryOne.png");
jerryImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
jerryImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(890, 600);
    tom.addAnimation("sleeping", tomImg1);
    tom.scale = 0.3;
    jerry = createSprite(200, 600);
    jerry.addAnimation("standing", jerryImg1);
    jerry.scale = 0.25;

}

function draw() {

    background(canvasImg);

    if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tomLast", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLast");

        jerry.changeAnimation("jerryLast", jerryImg3);
    }



    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.changeAnimation("running", tomImg2);

      jerry.changeAnimation("teasing", jerryImg2);
  }


}
