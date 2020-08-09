let input, length, button;
function setup() {
  createCanvas(400, 400);
  background(255);
  length = createElement("h2","what is the length of the square ?");
  length.position(10,0);
  input = createInput();
  input.position(20, 65);  
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(answer);
  textAlign(CENTER);
  textSize(25);
}

function answer(){
 const num = input.value();
  var area = num * num;
  var perimeter = 4 * num;
  stroke(0);
  strokeWeight(4);
  fill(255);
  text("length of square = " + num, width / 2, height / 3.5);
  text("area of square = " + area, width / 2,height / 2);
  text("perimeter of square = " + perimeter, width / 2,height / 1.5);
  let button2 = createButton('reset');
  button2.position(button.x + button.width, 65);
  button2.mousePressed(clearCanvas);
}
function clearCanvas(){
  clear();
  background(255);
}