

var fundo
var gato, rato
var sleepcat, mousecheese, catwalk, jerryholmes, catsit

function preload() {
fundo=loadImage("garden.png")

{ jerryholmes=loadAnimation("jerryFour.png")
 mousecheese=loadAnimation("jerryOne.png") }
 

{ catsit=loadAnimation("tomFour.png")
catwalk=loadAnimation("tomTwo.png", "tomThree.png")
sleepcat=loadAnimation("tomOne.png") }

}

function setup() {
  createCanvas(1000,800)
  
 gato=createSprite(800,600)
gato.addAnimation("sleeping", sleepcat)
gato.scale=0.2

rato=createSprite(200,600)
rato.addAnimation("Standing", mousecheese)
rato.scale=0.15

}

function draw() {
  background(fundo);

   if(keyDown("space")) {
     gato.velocityX=-3
    gato.addAnimation("Running", catwalk)
    gato.changeAnimation("Running")
   }
    
  if(gato.isTouching(rato)) {
    gato.velocityX=0
   rato.addAnimation("lastImage", jerryholmes)
   gato.addAnimation("lastImage", catsit)
   gato.changeAnimation("lastImage")
   rato.changeAnimation("lastImage")
   gato.x=300
  }
    
  
  

  

  drawSprites();
}



