const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var structure, ground, cieling;
var shooter, ball, ballDisplay;

var PLAY = 0;
var WON = 1;

var gameState = PLAY;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  shooter = createSprite(100, 300, 60, 20);
  shooter.shapeColor = 255, 255, 100, 127;

  ballDisplay = false;

  structure = new Structure(230, 245, 15, 15, 5, 10);
  structure.setColors();
  structure.display();

  ground = Matter.Bodies.rectangle(260, 250, 90, 8, { isStatic: true });
  World.add(world, ground)

  cieling = Matter.Bodies.rectangle(width / 2, 0, width, 8);
  cieling.isStatic = true;
  World.add(world, cieling)
}


function draw() {
  background(100)
  Engine.update(engine);

  shooter.pointTo(mouseX, mouseY);

  if (ballDisplay === true) {
    ball.display();
  }

  fill(0)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 90, 5)
  rect(cieling.position.x, cieling.position.y, width, 5)

  structure.display();
  drawSprites();
}

function mouseClicked() {
  console.log("working", shooter._rotation)
  ball = new Ball(shooter._rotation, 100, 300)
  ballDisplay = true;
  ball.shoot();
}

function handleGameStates() {
  console.log(structure.structureGroup);
  console.log(ground)

  for (var i = 0; i < structure.structureGroup.length; i++) {
    if (Matter.SAT.collides(structure.structureGroup[i].body, ground).collided) {
      gameState = PLAY;
    }
  }

  var array = [];
  for (var i = 0; i < structure.structureGroup.length; i++) {
    if (Matter.SAT.collides(structure.structureGroup[i].body, ground).collided !== true) {
      array.push(structure.structureGroup[i].body);
    }
    if (array.length === structure.structureGroup.length);
  }
}