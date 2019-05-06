let hue = 0;
var img;
 
function preload()
{
  // load image
  img = loadImage("cat1.jpg");
}
 
function setup() 
{
  // set canvas size
  createCanvas(700, 825); 
  colorMode(HSB,360, 100, 100);
}
 
function draw() 
{
  background(255);
 
  // display image (img, x, y)
  tint(297,97,100 );
  image(img, 250, 50);
  noStroke();
  fill(hue, 255, 255);
  hue += 0.1;
  if (hue > 360) hue = 0;
  push();
  translate(width * 0.86, height * 0.45);
  rotate(frameCount / -20.0);
  star(0, 0, 20, 60, 5);
  pop();
  push();
  translate(width * 0.66, height * 0.45);
  rotate(frameCount / 20.0);
  star(0, 0, 20, 60, 5);
  pop();
  push();
  translate(width * 0.86, height * 0.45);
  rotate(frameCount / 20.0);
  star(0, 0, 15, 55, 5);
  pop();
  push();
  translate(width * 0.66, height * 0.45);
  rotate(frameCount / -20.0);
  star(0, 0, 15, 55, 5);
  pop();
}
	
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function mousePressed() {
  // Check if mouse is inside shape
  let d = dist(mouseX, mouseY, 360, 200);
  if (d > 100) {
    // Pick new filter
   img.filter(INVERT);
   
  }
}