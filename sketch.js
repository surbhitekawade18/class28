
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{tree = loadImage("images/tree.png")
 boy =loadImage("images/boy.png")	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1=new Mango(850,260,50,50)
	mango2=new Mango(860,250,50,50)
    mango3=new Mango(870,290,50,50)
    mango4=new Mango(880,220,50,50)
	mango5=new Mango(857,270,50,50)
	mango6=new Mango(890,260,50,50)
    mango7=new Mango(840,240,50,50)
	stone=new Stone(85,530,50,50)
	rubberband=new SlingShot(stone.body,{x:85,y:530})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(tree,800,80,500,600)
  image(boy,80,500,100,200)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  stone.display()
  rubberband.display()
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6) 
  detectcollision(stone,mango7)
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased(){
	  rubberband.fly()
  }

	function detectcollision(lstone,lmango) {
		 mangoBodyPosition=lmango.body.position 
		 stoneBodyPosition=lstone.body.position
		 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
		 if(distance<=100) { Matter.Body.setStatic(lmango.body,false); } }
	
 
