function setup() {
  createCanvas(400, 400)
  //background(200, 200, 500)



  // put setup code here
}

function draw() {
  if(keyIsPressed == true){
    background(500, 200, 200)
  }
  else{
    background(200, 200, 500)
  }
  background(200, 200, 500)
  rectMode(CENTER)
  stroke(50, 50, 50)
  strokeWeight(5)
  if(keyIsPressed == true){
    stroke(250, 250, 250)
    strokeWeight(5)
    fill(150, 180, 300)
    triangle(200, 150, 150, 200, 250, 200)
  }
  else{
    stroke(50, 50, 50)
    strokeWeight(5)
    fill(300, 180, 150)
    triangle(200, 150, 150, 200, 250, 200)
  }


  //Eyes:
  if(keyIsPressed == true){
    fill(100, 100, 100)
    ellipse(100, 100, 100, 50)
    ellipse(300, 100, 100, 50)
  }
  else{
    fill(300, 300, 300)
    ellipse(100, 100, 100, 50)
    ellipse(300, 100, 100, 50)
  }
  fill(300, 300, 300)
  ellipse(100, 100, 100, 50)
  ellipse(300, 100, 100, 50)

  //Pupils:
  fill(50, 50, 50)
  if(keyIsPressed == true){
    fill(150, 150, 150)
    ellipse(100, 100, 25, 25)
    ellipse(300, 100, 25, 25)
  }
  else{
    fill(50, 50, 50)
    ellipse(100, 100, 25, 25)
    ellipse(300, 100, 25, 25)
  }

  //Mouth:
  strokeWeight(10)
  if(keyIsPressed == true){
    fill(50, 50, 150)
    ellipse(200, 300, 200, 75)
  }
  else{
    fill(150, 50, 50)
    ellipse(200, 300, 200, 75)
  }


  //Tongue:
  //strokeWeight(0)
  noStroke()
  if(keyIsPressed == true){
    fill(100, 100, 200)
    ellipse(200, 320, 100, 40)
  }
  else{
    fill(200, 100, 100)
    ellipse(200, 320, 100, 40)
  }

  // put drawing code here
}
