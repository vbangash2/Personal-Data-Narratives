function setup() {
  createCanvas(400, 400)
  background(200, 200, 500)



  // put setup code here
}

function draw() {

  rectMode(CENTER)
  stroke(50, 50, 50)
  strokeWeight(5)
  fill(300, 180, 150)
  triangle(200, 150, 150, 200, 250, 200)

  //Eyes:
  fill(300, 300, 300)
  ellipse(100, 100, 100, 50)
  ellipse(300, 100, 100, 50)

  //Pupils:
  fill(50, 50, 50)
  ellipse(100, 100, 25, 25)
  ellipse(300, 100, 25, 25)

  //Mouth:
  strokeWeight(10)
  fill(150, 50, 50)
  ellipse(200, 300, 200, 75)

  //Tongue:
  //strokeWeight(0)
  noStroke()
  fill(200, 100, 100)
  ellipse(200, 320, 100, 40)

  // put drawing code here
}
