var starImg,bgImg,fairyImg,fairysounds;
var star, starBody,fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//add fairysoun here

	fairysounds = loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	
	
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(130,520);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale =0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  
  //fairy.velocityX = 2 ;
  console.log(star.y);

  fairysounds.play();

  //write code to stop star in the hand of fairy

  if(star.y > 470 && starBody.position.x > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}
//writw code to move fairy left and right

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x+20;
	}  
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x-40;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	
}
