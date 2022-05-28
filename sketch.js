const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var astronauta, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/espacio.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

  
    alien1 = new Alien(850, 350);
    alien2 = new Alien(850, 270);
    alien3 = new Alien(850, 220);
    

    alien4 = new Alien(900, 350);
    alien5 = new Alien(925, 270);
    alien6 = new Alien(900, 220);

    alien9 = new Alien(875, 170);

  

    astronauta = new Astronauta(200,70);
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(astronauta.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    alien1.display();
    
    alien2.display();
    
    alien3.display();

    alien4.display();
    
    alien5.display();
    
    alien6.display();

    alien9.display();
    

    

    astronauta.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(astronauta.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}