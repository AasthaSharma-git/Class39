var ball,database;
var position;

var gameState=0;
var form,game;
var playerCount;
var player;
var allPlayers;

var cars=[];
var car1,car2,car3,car4;
var flag=0;
var y=0;
function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();

}

function draw(){
 
  if(playerCount===4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
  
  

}



