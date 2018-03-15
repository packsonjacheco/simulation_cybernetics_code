// - using and updating state
// - js objects
// - interactivity (mouse click, key presses)
// - conditionals


// to keep track of the game state
const STATE = {
  score: 0,
  circle_x: 0,
  circle_y: 0,
  velocity_x: 3,
  velocity_y: 3,
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(173,216,230);

  // change fill color depending on score
  if (STATE.score < 100) {
    fill(0, 0, 0);
}else if (STATE.score >= 900) {
	fill (250,250,250);
}else if (STATE.score >= 800) {
	fill (200,200,200);
}else if (STATE.score >= 700) {
	fill (175,175,175);
}else if (STATE.score >= 600) {
	fill (150,150,150);
}else if (STATE.score >= 500) {
	fill (125,125,125);
}else if (STATE.score >= 400) {
	fill (100,100,100);
}else if (STATE.score >= 300) {
	fill (75,75,75);
}else if (STATE.score >= 200) {
	fill (50,50,50);
}else if (STATE.score >= 100) {
	fill (25,25,25);
  } else {
    fill(250, 0, 0);
  }

var lose = false;
if (STATE.circle_x < 0) { //checks if its off the left
	lose = true;
} else if (STATE.circle_y < 0) { // checks the top
	lose =  true;
} else if (STATE.circle_x > width) { // checks the right
	lose = true;
} else if (STATE.circle_y > height) { // checks the bottom
	lose = true;
}

if (lose) {
	text('you suck!', 200, 200)
	STATE.velocity_x = 0;
	STATE.velocity_y = 0;
} else {
	STATE.score += 1;
}

  // change circle radius depending on score
  [centerX, centerY] = [width/2, height/2];
  ellipse(STATE.circle_x, STATE.circle_y, 80);

  STATE.circle_x += STATE.velocity_x;
  STATE.circle_y += STATE.velocity_y;

  // show score
  textSize(40);
  text(`ur score is ${STATE.score}`, width/2-140, 50);
}


function keyPressed() {
  // lookup keycodes here: http://keycode.info/
  if (keyCode === 65) { // a
    STATE.velocity_x *= -1.025;
  } else if (keyCode === 83) { // s
    STATE.velocity_y *= -1.025;
  } else if (keyCode === 82) {
  	STATE.score = 0;
  	STATE.velocity_x = 3;
  	STATE.velocity_y = 3;
  	STATE.circle_x = centerX;
  	STATE.circle_y = centerY;
  }
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// handles mouse clicks for the entire page
function mouseClicked() {
  // increment score by 1
  // STATE.score += 1;
}
