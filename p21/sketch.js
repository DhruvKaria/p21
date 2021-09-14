var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box1 = createSprite(0,580,200,30)
    box1.shapeColor = "red"
    box2 = createSprite(295,580,200,30)
    box2.shapeColor = "blue"
    box3 = createSprite(515,580,200,30)
    box3.shapeColor = "green"
    box4 = createSprite(740,580,200,30)
    box4.shapeColor = "orange"




    //create box sprite and give velocity
box = createSprite (random(20,750),100,40,40)
box.shapeColor = "yellow"
box.velocityX = 4
box.velocityY = 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgesprite
    edges = createEdgeSprites()
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(box.isTouching(box1)&& box.bounceOff(box1)){
        box1.shapeColor = "red"
        
    }
    if(box.isTouching(box2)){
        box.velocityX = 0
        box.velocityY = 0
        box2.shapeColor = "blue"
        
    }
    if(box.isTouching(box3)&& box.bounceOff(box3)){
        box3.shapeColor = "green"

    }
        if(box.isTouching(box4)&& box.bounceOff(box4)){
        box4.shapeColor = "orange"
        
        
    }

drawSprites()
}
