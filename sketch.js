const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world,engine;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
 
  var balloptions = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);
 
  

}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}