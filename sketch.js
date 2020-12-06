//Create variables here
var dog,dog2
var  happyDog
var  database
var  foodS
var foodStock
var button1,button2
var fedTime,lastFed
var foodOBJ
function preload()
{
  //load images here
  dog2=loadImage("images/Dog.png")
  happyDog=loadImage("images/happydog.png")
}

function setup() {
  createCanvas(500,500);
  var dog = createSprite(200,200,50,50)
  dog.addImage(dog2)
//FEED=CRERATE
button1=createButton("feed the dog")
button1.position(700,95)
button1.mousePressed(feedDog);
button2=createButton("add food")
button2.position(700,95)
fedTime.mousePressed(addFoods);  
database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}
Text("Press UP_ARROW to feed the dog with milk",100,100)

function draw() {  
background(46, 139, 87)
drawSprites();

}

function writeStock(){
if(x<=0){
x=0;
}
else
{
x=x-1
}
database.ref('/').update({
  food:x
})
}



