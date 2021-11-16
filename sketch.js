var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation('catsit',tomImg1);
    tom.addAnimation('catwalk',tomImg2);
    tom.addAnimation('cat',tomImg3);
    tom.scale=0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation('mice',jerryImg1);
    jerry.addAnimation('miceannoy',jerryImg2);
    jerry.addAnimation('micelook',jerryImg3);
    jerry.scale=0.2;


}

function draw() {

    background(bg);

   

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
      tom.changeAnimation('cat');
      jerry.changeAnimation('micelook');
      tom.velocityX=0;
      tom.x=300;

    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        jerry.changeAnimation('miceannoy');
        tom.changeAnimation('catwalk');
        
        tom.velocityX = -5;
    }
    
}