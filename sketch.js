var cat,ci1, ca, ci2
var garden, gimg
var mouse, mi1, ma, mi2
function preload() {
    //load the images here
    mi1=loadAnimation("mouse1.png")
    mi2=loadAnimation( "mouse4.png")
    ma=loadAnimation("mouse2.png","mouse3.png")
    ci1=loadAnimation("cat1.png")
    ca=loadAnimation("cat2.png","cat3.png")
    ci2=loadAnimation("cat4.png")
    gimg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400)
    garden.addImage(gimg)

    cat=createSprite(750,600)
    cat.addAnimation("walking",ci1)
    cat.scale=0.2

    mouse=createSprite(100,600)
    mouse.addAnimation("teasing",mi2)
    mouse.scale=0.2

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("walking",ci2)
        cat.changeAnimation();
        cat.x=200
        mouse.addAnimation("teasing",mi1)
        mouse.changeAnimation();
    }
    drawSprites();
}


function keyPressed(){
  if (keyDown("left")){
    mouse.addAnimation("teasing",ma)
    mouse.changeAnimation()
    cat.addAnimation("walking",ca)
    cat.changeAnimation();
    cat.velocityX=-2
  }
  //For moving and changing animation write code here


}
