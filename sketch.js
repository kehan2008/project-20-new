var cat,catImage;
var mouse,mouseImage;
var garden,gardenImage;

function preload() {
    //load the images here
    catImage = loadAnimation("cat1.png");
    mouseImage = loadAnimation("mouse1.png");
    catImage2 = loadAnimation("cat2.png","cat3.png");
    mouseImage2 = loadAnimation("mouse2.png","mouse3.png");
    gardenImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(350,100,40,20);
    cat.addAnimation("cat_running",catImage);
    cat.scale = 0.1;
    mouse = createSprite(250,100,10,20);
    mouse.addAnimation("mouseTeasing",mouseImage);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseImage);  
   mouse.changeAnimation("mouseTeasing");
   mouse.frameDelay = 25;
    }

    if(keyCode === RIGHT_ARROW){
        cat.addAnimation("cat_running",catImage);  
        cat.changeAnimation("cat_running");
        cat.frameDelay = 25;
         }

}
