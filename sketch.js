//Create variables here
var happydogimg,dog,dogimg;

var foodS, foodStock;
function preload()
{
  //load images here
  happydogimg= loadImage("dogImg1.png");
  dogimg = loadImage("dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(dogimg);
  
}


function draw() {  
  background(46, 139, 87);
  foodStock=database.ref('Food')
  foodStock.on("value",readStock())
  drawSprites();
  //add styles here
  fill("white");
  stroke(3);
  textSize(2);
  text("Note:Press Up arrow key to feed the dog milk!",250,100);
  if (KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimg);
  }

}
function readStock(){
  foodS=data.val();
}
function writeStock(){
  database.ref('/').update({
    food:x
  })
}

