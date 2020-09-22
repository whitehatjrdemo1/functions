const Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;
var engine,world;
var object,ground;


function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world = engine.world;

  var options={
    'isStatic':true

  }
  ground=Bodies.rectangle(200,400,400,50,options);
  object=Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  World.add(world,ground);
  console.log(object);

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,50)
}