var bubbles = [ ]
function setup() {
  createCanvas(800,600)
  for (var i = 0; i < 400; i++){
      bubbles.push({ 
          x: random(0, width), 
          y: random(0, height),
          color: color(random(0, 255), random(0, 255), random(0,255))
      })
  }
}

function draw() {
  background(0)
  fill(250)
  for (var b = 0; b < bubbles.length; b++) {
    fill(bubbles[b].color)
    ellipse(bubbles[b].x, bubbles[b].y, 40, 40)

    bubbles[b].x += random(-20, 20)
    bubbles[b].y += random(-20, 20)      
  }
}