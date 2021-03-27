var canvas;
var database;
var form;
var player;
var playerCount=0;
var game;
var gameState=0;
var allPlayers;
var distance=0;
var car1,car2,car3,car4;
var cars;
function setup(){

  canvas=createCanvas(displayWidth,displayHeight)

  // connectivity to firebase
  database = firebase.database();
  game=new Game()
  game.getState();
  game.start();
  
}

function draw(){
  background("white");

  if(gameState==1){
    clear();
    game.play();
  }

  if(playerCount==4){
    game.update(1);
    }
  
  
    
  
}

