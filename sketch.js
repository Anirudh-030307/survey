var canvas,button ;
var database;
var form,game;
//person = player
var player,playerCount,email,ans;
var allPlayers,radio;

function setup() {
  database = firebase.database();
  canvas = createCanvas(800,500);

  game = new Game();
  game.start();

}

function draw() {
  background("white");  
}
