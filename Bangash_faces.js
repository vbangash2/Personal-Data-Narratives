//This site allows the user to create randomly generated faces of three types,
//normal using the function normalFace, abstract using the function abstractFace,
//and crazy using the function crazyFace. The controls are as follows:
//n key: draw normal face
//a key: draw abstract face
//c key: draw crazy face
//e key: toggle erasing; erasure is already on whne the code begins, pressing the
//e key will turn off the background and show the previous faces behind the ones
//being drawn.
//s key: save image as .jpg file


let normalFace_bool = true
let abstractFace_bool = false
let crazyFace_bool = false
let background_bool = true

function preload(){
}
function setup(){
  createCanvas(windowWidth, windowHeight)
  background(255)
  imageMode(CENTER)
  rectMode(CENTER)
}
function draw(){
  if(normalFace_bool == true){
    normalFace()
    normalFace_bool = false
  }
  if(abstractFace_bool == true){
    abstractFace()
    abstractFace_bool = false
  }
  if(crazyFace_bool == true){
    crazyFace()
    crazyFace_bool = false
  }

}

//Normal face is unique in that the eyes are guaranteed to be equal reflections over
//the y-axis, ensuring a more typical layout. They are also the same size, shape, color,
//and have matching pupil types. The mouth is also set to be in the middle of the screen
//making the face symmetrical aside from the nose.
function normalFace(){
  if(background_bool == true){
    background(255)
  }
  //Delare variables
  eye_Red = random(255)
  eye_Green = random(255)
  eye_Blue = random(255)
  //eye_stroke = random(15)

  eye_x = random(width/5, width/3)
  eye_y = random(height/5, height/2)
  eye_w = random(50, 200)
  eye_h = random(50, 200)

  pupil_w = random(0, eye_w)
  pupil_h = random(0, eye_h-50)

  eye_x2 = width - eye_x
  eye_y2 = eye_y
  eye_w2 = eye_w
  eye_h2 = eye_h

  mouth_x = width/2
  //mouth_y = eye_y2 - eye_y

  //Mouth has to be drawn first in case it overlaps other elements of the face
  //Mouth is a bit easier as it is merely an ellipse or rectangle
  //I used  a higher red value for the normalFace mouth because it should be
  //less random than the abstract or crazy faces
  new_randomizer = int(random(1,3))
  print(new_randomizer)
  mouth_red = random(150, 255)
  if(new_randomizer == 1){
    noStroke()
    fill(mouth_red, random(255), random(255))
    rect(mouth_x, random(2*height/3, 4*height/5), random(100, width/2), random(50, height / 3))
  }
  else if(new_randomizer == 2){
    noStroke()
    fill(mouth_red, random(255), random(255))
    ellipse(mouth_x, random(2*height/3, 4*height/5), random(100, width/2), random(50, height / 3))
  }
  //randomizer
  randomizer = int(random(1,3))

  //Left Eye, randomly assigned x and y coordinates, color and shape type.
  //As opposed to abstract, normalFace has some contraints to ensure a more
  //Typical sketch of a face, including matching colors sets for eyes and
  //More precise feature placement.


  if(randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(eye_x, eye_y, eye_w, eye_h)
  }
  else if (randomizer >= 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(eye_x, eye_y, eye_w, eye_h)
  }

  //Pupil:
  if (randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x, eye_y, pupil_w, pupil_h)
  }
  else if (randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x, eye_y, pupil_w, pupil_h)
  }

  //Right Eye
  if(randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(eye_x2, eye_y2, eye_w, eye_h)
  }
  else if (randomizer >= 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(eye_x2, eye_y2, eye_w, eye_h)
  }
  if (randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x2, eye_y2, pupil_w, pupil_h)
  }
  else if (randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x2, eye_y2, pupil_w, pupil_h)
  }

  //Nose implements a triangle which are a bit harder to work with because
  //of the three coordinates they use whereas other shapes only require 2
  stroke(random(255), random(255), random(255))
  strokeWeight = random(0, 25)
  fill(random(255), random(255), random(255))
  triangle(random(width/3, width/2), random(height/2, 2*height/3), random(2*width/5, 3*width/5), random(height/3, height/2), random(width/2, 2*width/3), random(height/2, 2*height/3))
}


//Abstract differs from normal face in that the eyes are assymetrical and uneven
//The mouth is also placed more randomly, but none of the placement is as loose
//as crazyFace()
function abstractFace(){
  if(background_bool == true){
    background(255)
  }

  //Declare variables
  eye_Red = random(255)
  eye_Green = random(255)
  eye_Blue = random(255)
  //eye_stroke = random(0, 15)

  eye_x = random(width/5, width/3)
  eye_y = random(height/5, height/2)
  eye_w = random(50, 200)
  eye_h = random(50, 200)

  pupil_w = random(0, eye_w)
  pupil_h = random(0, eye_h-50)

  eye_x2 = random(4*width/5, 2*width/3)
  eye_y2 = random(height/5, height/2)
  eye_w2 = random(50, 200)
  eye_h2 = random(50, 200)

  mouth_x = eye_x2 - eye_x

  //the abstract face does not need
  new_randomizer = int(random(1,3))
  print(new_randomizer)
  if(new_randomizer == 1){
    noStroke()
    fill(random(255), random(255), random(255))
    rect(mouth_x, random(2*height/3, 4*height/5), random(100, width/2), random(50, height / 3))
  }
  else if(new_randomizer == 2){
    noStroke()
    fill(random(255), random(255), random(255))
    ellipse(mouth_x, random(2*height/3, 4*height/5), random(100, width/2), random(50, height / 3))
  }
  //randomizer
  randomizer = int(random(1,3))
  if(randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(eye_x, eye_y, eye_w, eye_h)
  }
  else if (randomizer >= 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(eye_x, eye_y, eye_w, eye_h)
  }
  //Pupil:
  if (randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x, eye_y, pupil_w, pupil_h)
  }
  else if (randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x, eye_y, pupil_w, pupil_h)
  }

  //Right Eye
  if(randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(eye_x2, eye_y2, eye_w, eye_h)
  }
  else if (randomizer >= 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(eye_x2, eye_y2, eye_w, eye_h)
  }
  if (randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x2, eye_y2, pupil_w, pupil_h)
  }
  else if (randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x2, eye_y2, pupil_w, pupil_h)
  }

  stroke(random(255), random(255), random(255))
  strokeWeight = random(0, 25)
  fill(random(255), random(255), random(255))
  triangle(random(width/3, width/2), random(height/2, 2*height/3), random(2*width/5, 3*width/5), random(height/3, height/2), random(width/2, 2*width/3), random(height/2, 2*height/3))
}
function crazyFace(){
  if(background_bool == true){
    background(255)
  }
  //Declare variables
  eye_Red = random(255)
  eye_Green = random(255)
  eye_Blue = random(255)

  eye_x = random(width/5, width/3)
  eye_y = random(height/5, height/2)
  eye_w = random(50, 200)
  eye_h = random(50, 200)

  pupil_w = random(0, eye_w)
  pupil_h = random(0, eye_h-50)

  eye_x2 = random(4*width/5, 2*width/3)
  eye_y2 = random(height/5, height/2)
  eye_w2 = random(50, 200)
  eye_h2 = random(50, 200)

  mouth_x = eye_x2 - eye_x

  //randomizer
  third_randomizer = int(random(1,3))
  eye_Red = random(255)
  eye_Green = random(255)
  eye_Blue = random(255)

  if(third_randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(random(0, width/2), random(0, height/2), random(0, 200), random(0, 200))
  }
  else if (third_randomizer == 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(random(0, width/2), random(0, height/2), random(0, 200), random(0, 200))
  }

  if (third_randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x2, eye_y2, pupil_w, pupil_h)
  }
  else if (third_randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x2, eye_y2, pupil_w, pupil_h)
  }

  eye_Red = random(255)
  eye_Green = random(255)
  eye_Blue = random(255)

  if(third_randomizer == 1){
    fill(eye_Red, eye_Green, eye_Blue)
    ellipse(random(width/2, width), random(0, height/2), random(0, 200), random(0, 200))
  }
  else if (third_randomizer >= 2) {
    fill(eye_Red, eye_Green, eye_Blue)
    rect(random(width/2, width), random(0, height/2), random(0, 200), random(0, 200))
  }
  if (third_randomizer == 1){
    fill(0, 0, 0)
    noStroke()
    rect(eye_x2, eye_y2, pupil_w, pupil_h)
  }
  else if (third_randomizer == 2){
    fill(0, 0, 0)
    noStroke()
    ellipse(eye_x2, eye_y2, pupil_w, pupil_h)
  }
  stroke(random(255), random(255), random(255))
  strokeWeight = random(0, 25)
  fill(random(255), random(255), random(255))
  triangle(random(width/3, width/2), random(height/3, 2*height/3), random(2*width/5, 3*width/5), random(0, height/2), random(width/2, 2*width/3), random(height/3, 2*height/3))

  fourth_randomizer = int(random(1,3))
  print(fourth_randomizer)
  if(fourth_randomizer == 1){
    noStroke()
    fill(random(255), random(255), random(255))
    rect(random(width/3, 2*width/3), random(height/2, height), random(0, width), random(0, height / 2))
  }
  else if(fourth_randomizer == 2){
    noStroke()
    fill(random(255), random(255), random(255))
    ellipse(random(width/3, 2*width/3), random(height/2, height), random(0, width), random(0, height / 2))
  }
}

//User chooses which type of Face to make
function keyPressed(){
  //Abstract
  if(key == 'a'){
    abstractFace_bool = true
    normalFace_bool = false
    crazyFace_bool = false
    print("absract")
  }
  //Normal
  if(key == 'n'){
    normalFace_bool = true
    abstractFace_bool = false
    crazyFace_bool = false
      print("normal")
  }
  //Crazy
  if(key == 'c'){
    crazyFace_bool = true
    normalFace_bool = false
    abstractFace_bool = false
      print("crazy")
  }
  //Save
  if(key == 's'){
    save('paint.jpg')
  }
  if(key == 'e'){
    if(background_bool == true){
      background_bool = false
    }
    else{
      background_bool = true
    }
  }
}
