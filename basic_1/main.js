// TODO
// - coordinate system
// - ellipses and other shapes
// - fills, strokes
// - text
// - images
// - positioning
// - rotation

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(194,183,117);

  // https://p5js.org/reference/#/p5/ellipse
 //mountain
  fill(122, 136, 74);
  rect(450, 275, 2000, 500);
 //dark mountain
  fill(38, 42, 26);
  rect(450, 275, 175, 300);
  //ground
fill(105, 73, 51);
ellipse(width/2, height/2+130, 500, 199);
  //water
fill(113, 135, 87);
ellipse(width/2+70, height/2-35, 500, 150);
//ground
fill(172, 137, 50);
ellipse(width/2+200, height/2+50, 145, 90);


  //balcony
  fill(92, 80, 39);
  rect(width/2-300, height/2+90, 800, 500);
 //balcony
  fill(11, 15, 24);
  rect(width/2-300, height/2+125, 800, 500);

//hair
fill(40, 21, 11);
ellipse(width/2+10, 370, 170, 250);
 //hair 
fill(40, 21, 11);
ellipse(width/2+10, 330, 170, 250);
//body
fill(41, 42, 37);
ellipse(width/2, 650, 350, 500);
//neck
  fill(247, 214, 135);
  rect(width/2-40, 340, 100, 100);
 //chest
fill(247, 214, 135);
ellipse(width/2, 470, 150, 100);
//hair
  fill(40, 21, 11);
ellipse(width/2, 330, 120, 150);
//head
   fill(247, 214, 135);
ellipse(width/2, 300, 120, 150);
//hands
fill(184, 124, 45);
ellipse(width/2, 670, 95, 70);
//hands
fill(247, 214, 135);
ellipse(width/2-50, 650, 100, 75);
//shoulder
fill(56, 56, 44);
ellipse(width/2+100, 620, 150, 400);




//nose
fill(220, 165, 96);
ellipse(width/2, 299, 10, 45);

//mouth
fill(220, 165, 96);
ellipse(width/2-10, 340, 30, 4);
//mouth2
fill(220, 165, 96);
ellipse(width/2+10, 338, 20, 4);
rotate(.75);
resetMatrix();

fill(220, 165, 96);
ellipse(width/2-30, 275, 35, 4);

fill(220, 165, 96);
ellipse(width/2+20, 275, 35, 4);
//lefteye
fill(0, 0, 0);
ellipse(width/2-25, 285, 9, 9);
//righteye
fill(0, 0, 0);
ellipse(width/2+25, 285, 9, 9);



//fill(120, 80, 35);
//rect(width/2-5, 315, 12, 7);
resetMatrix();



  // https://p5js.org/reference/#/p5/fill


  //shadows
  fill(0, 0, 0);
  rect(0, 0, 475, 1000);

  fill(0, 0, 0);
  rect(width/1.5, 0, 500, 1000);
  //borrom
  fill(0, 0, 0);
  rect(width/2-300, height/2+335, 800, 500);
  //top
  fill(0, 0, 0);
  rect(width/2-300, height/2-735, 800, 500);
  resetMatrix();

  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
