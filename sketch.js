var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
var count = 0;


function setup() {
  createCanvas(800, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var i = 75; i <=width; i=i+50) {
       plinkos.push(new Plinko(i,75));
    }

    for (var i = 50; i <=width-10; i=i+50) {
        plinkos.push(new Plinko(i,175));
    }

    for (var i = 75; i <=width; i=i+50) {
        plinkos.push(new Plinko(i,275));
   }

   
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( count>= 10) {
    
    textSize(100);
    fill("lightblue");
    text("GameOver", 150, 250);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
      
     if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
      score=score+500;
      particles.pop();
     }
    else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
      score = score + 200;
      particles.pop();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(mousePressed){
      count++;
      particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}