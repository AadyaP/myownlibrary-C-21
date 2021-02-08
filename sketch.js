var fixedrect, movingrect; var obj1, obj2;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600,200,30,50);
  obj1=createSprite(200,200,40,40);
  obj2=createSprite(100,200,20,15);
  obj1.shapeColor="yellow";
  obj2.shapeColor="black";
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="red";
  obj2.velocityX=2;
  movingrect.velocityX=3;
  obj2.velocityY=4;
  movingrect.velocityY=3;


}

function draw() {
  background("grey");  
 movingrect.x=mouseX;
 movingrect.y=mouseY;
if(isTouching(movingrect,obj1)){
  movingrect.shapeColor="red";
  obj1.shapeColor="red";}

  else{movingrect.shapeColor="green";
obj1.shapeColor="green"; }
 bounceOff(movingrect,obj2)
drawSprites();
}
