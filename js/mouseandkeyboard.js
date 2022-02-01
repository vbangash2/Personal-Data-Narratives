//comment
let ellipse_X = 500
function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw(){
  background(10, 10, 100)

  rectMode(CENTER)

  //fill(300, 150, 100)
  ellipse(mouseX, mouseY, 50, 50)
  if(mouseX < windowWidth/2){
    fill(100, 150, 300)
  }
  else{
    fill(300, 150, 100)
  }

  print(mouseX)
}
