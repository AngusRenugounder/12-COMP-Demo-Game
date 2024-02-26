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
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
world.gravity.y = 80;  
rectangle = new Sprite(PLAYER_WIDTH, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd'); 
rectangle.color = 'cyan';
wallBot  = new Sprite(0, SCREEN_HEIGHT, SCREEN_WIDTH*2, 10, 'k');
wallBot.color = color("blue");

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
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('lightgrey'); 

}

/*******************************************************/
//  END OF APP
/*******************************************************/
