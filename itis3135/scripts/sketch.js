function setup(){
    createCanvas(750,500).parent('canvas-container');
    background(255);
}
function draw(){
    stroke(0);
    fill(128,0,128)
    if(mouseIsPressed){
        circle(mouseX, mouseY, 20);
    } 
    
}