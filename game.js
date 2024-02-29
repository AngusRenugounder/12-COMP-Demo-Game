/*******************************************************/
// P5.play: Geometry Dash Game
// Create a sprite
// Written by Angus
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");
const SCREEN_HEIGHT = 200;
const SCREEN_WIDTH = 400;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;
const OBSTACLE_HEIGHT = 25;
const OBSTACLE_WIDTH = 25;
const OBSTACLE_SPAWN = 300;
var spawnDist = 0+1;
var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);

rectangle = new Sprite(PLAYER_WIDTH, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd'); 
rectangle.color = 'cyan';

obstacle = new Sprite(OBSTACLE_SPAWN, SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'k'); 
obstacle.color = 'yellow';
obstacle.vel.x = -5

obstacles = new Group();
obstacles.add(obstacle);

wallBot  = new Sprite(0, SCREEN_HEIGHT, SCREEN_WIDTH*2, 5, 'k');
wallBot.color = color("blue");
world.gravity.y = 80;  
document.addEventListener("keydown", function(event) {

 if (event.code === 'ArrowUp' & rectangle.y > 175) {
rectangle.vel.y = -20;
 }
else if (event.code === 'ArrowDown')
rectangle.vel.y = 10;
 console.log("key pressed: ");

});

document.addEventListener("keyup", function(event) {
if (event.code === 'ArrowUp') {
   rectangle.vel.y = 0;
 }

else if (event.code === 'ArrowDown')
rectangle.vel.y = 0;
});
rectangle.collides(obstacle, youDead);
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('lightgrey'); 
newObstacle();
}
function newObstacle(){
obstacle = new Sprite(OBSTACLE_SPAWN, SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k'); 
obstacle.color = 'yellow';
obstacle.vel.x = -5    
obstacles.add(obstacle);
 spawnDist=spawnDist + 100;
}
function youDead(_rectangle, _obstacle){
    console.log("YouDied")
}
/*******************************************************/
//  END OF APP
/*******************************************************/
