const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var engine, world;
var blower, blowermouth, ball;
var button;


function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world

  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20)
  blowermouth = new Blowermouth(width / 2 + 70, height / 2 + 20, 100, 90);
  ball = new Ball(width/2 + 80, height / 2 - 80, 80, 80)

  button = createButton("Tap To Blow!")
  button.position(width / 2, height - 100)
  button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background(59);
  Engine.update(engine)

  blower.show()
  blowermouth.show()
  ball.show()
}

function blow() {
  Matter.Body.applyForce(ball.body, {x: 0, y: 0 }, {x: 0, y: 0.05 });
}