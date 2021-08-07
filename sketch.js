var player, canvas, ground, jump = 10, pl1, pl2;
var p, p2, g, plI1, plI2, p3, p4;
var level = 1;
var edges;

function preload(){
 p = loadImage('player.png');
 p2 = loadImage('player2.png');
 p3 = loadAnimation('player2.png','player3.png');
 p4 = loadAnimation('player5.png','player.png');
 g = loadImage('ground.png');
 s = loadImage('sky.png');
 plI1 = loadImage('pl1.png');
}
function setup(){
  canvas = createCanvas(1318, 625);
  player = createSprite(30,300,25,60);
  player.addAnimation('Player1',p);
  player.addAnimation('Player2',p2);
  player.addAnimation('left',p3);
  player.addAnimation('r',p4);
  ground = createSprite(width/2,height-10,width*2,30);
  ground.addImage('Ground',g);
  pl1 = createSprite(150,500,300,200);
  pl1.addImage('Pl1',plI1);

}
function draw(){
  background(s);
  fill(0,0,0,100);
  rect(0,0,1318,700);
  //edges = createEdgeSprites();
  //player.bounceOff(edges[0]);
  //player.bounceOff(edges[1]);
  //player.bounceOff(edges[2]);
  //player.bounceOff(edges[3]);

  if(level === 1){
    jump = 15;
    Gravity(player,ground)
    Gravity(player,pl1);
  }

  move();
  drawSprites();
}

function Gravity(player,ground){

  if(player.isTouching(ground)){
    player.velocityY = 0;
    player.collide(ground);

    if(keyDown(UP_ARROW)){
      player.velocityY = jump * -1;
    }    
  }
  else{
    player.velocityY = player.velocityY + 0.8;
  }
  
}

function move(){
  if(keyDown(RIGHT_ARROW)){
    player.x += 13;
    player.changeAnimation('r');
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.changeAnimation('Player1',p);
  }
 
  if(keyDown(LEFT_ARROW)){
    player.x += 13 * -1;
    player.changeAnimation('left',p3);
  }

  if(keyWentUp(LEFT_ARROW)){
    player.changeAnimation('Player2',p2);
  }

  
}