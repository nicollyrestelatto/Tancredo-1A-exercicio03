let cor;
let posicaoHorizontal;
let posicaoVertical;
let posicaoHorizontal2;
let posicaoVertical2;

function setup() {
  createCanvas(400, 400);
  background("purple");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);

 posicaoHorizontal2 = 0;
 posicaoVertical2 = random(height);
}




function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50); 

  posicaoHorizontal+= random(1, 3)
posicaoVertical+= random(-3, 3)
  posicaoHorizontal2+=random(1, 3)
posicaoVertical2+=random(-3, 3)
   
   
  if(mouseIsPressed) cor = color(random(0,250), random (0,255), random(0,255), random(0,100));
  
  
}