let x   =260;
let y=0;
let r=0;
let bpx=x-150;
let bpy=y-92;
let fpx=x-3;
let fpy=y-152;
let gravity=0.5;
let velocity=0;
let flight=-1.5;
let platform=375;
let state="start";
function backgroundimage(){
background(0,150,230);

    //sun
    fill(255,255,0);
    noStroke();
    ellipse(20,20,150);
    triangle(60,140,40,105,55,100);
    triangle(120,100,90,70,80,80);
    triangle(150,45,108,20,105,35);
    triangle(5,150,0,110,10,110);

    //ocean
    fill(0,50,150);
    triangle(0,380,-10,400,10,400);
    triangle(10,380,0,400,20,400);
    triangle(20,380,10,400,30,400);
    triangle(30,380,20,400,40,400);
    triangle(40,380,30,400,50,400);
    triangle(50,380,40,400,60,400);
    triangle(60,380,50,400,70,400);
    triangle(70,380,60,400,80,400);
    triangle(80,380,70,400,90,400);
    triangle(90,380,80,400,100,400);
    triangle(100,380,90,400,110,400);
    triangle(110,380,100,400,120,400);
    triangle(120,380,110,400,130,400);
    triangle(130,380,120,400,140,400);
    triangle(140,380,130,400,150,400);
    triangle(150,380,140,400,160,400);
    triangle(160,380,150,400,170,400);
    triangle(170,380,160,400,180,400);
    triangle(180,380,170,400,190,400);
    triangle(190,380,180,400,200,400);
    triangle(200,380,190,400,210,400);
    triangle(210,380,200,400,220,400);
    triangle(220,380,210,400,230,400);
    triangle(230,380,220,400,240,400);
    triangle(240,380,230,400,250,400);
    triangle(250,380,240,400,260,400);
    triangle(260,380,250,400,270,400);
    triangle(270,380,260,400,280,400);
    triangle(280,380,270,400,290,400);
    triangle(290,380,280,400,300,400);
    triangle(300,380,290,400,310,400);
    triangle(310,380,300,400,320,400);
    triangle(320,380,310,400,330,400);
    triangle(330,380,320,400,340,400);
    triangle(340,380,330,400,350,400);
    triangle(350,380,340,400,360,400);
    triangle(360,380,350,400,370,400);
    triangle(370,380,360,400,380,400);
    triangle(380,380,370,400,390,400);
    triangle(390,380,380,400,400,400);
    triangle(400,380,390,400,410,400);
    triangle(410,380,400,400,420,400);
    triangle(420,380,410,400,430,400);
    triangle(430,380,420,400,440,400);
    triangle(440,380,430,400,450,400);
    triangle(450,380,440,400,460,400);
    triangle(460,380,450,400,470,400);
    triangle(470,380,460,400,480,400);
    triangle(480,380,470,400,490,400);
    triangle(490,380,480,400,500,400);
    triangle(500,380,490,400,510,400);
    triangle(510,380,500,400,520,400);
    triangle(520,380,510,400,530,400);
    triangle(530,380,520,400,540,400);
    triangle(540,380,530,400,550,400);
    triangle(550,380,540,400,560,400);
    triangle(560,380,550,400,570,400);
    triangle(570,380,560,400,580,400);
    triangle(580,380,570,400,590,400);
    triangle(590,380,580,400,600,400);
    triangle(600,380,590,400,610,400);
    rect(0,400,700,200);
}
function fly(){
    if (keyIsDown(32)){
        velocity+=flight;
    }
    gravity+=0.00005;
    velocity+=gravity;
    y+=velocity;
    if (y>platform){
        y=platform;
    }
    if(y<platform){
        bpy+=velocity;
        fpy+=velocity;
    }
}
function startscreen(){  
    fill(0,135,230);
    stroke(0,0,0);
    rect(200,100,200,80);
    fill(0,0,0);
    noStroke();
    text("Press to start",263,140);
    
}
function gamescreen(){
    Character(x,y);
    fly();

    //boat
    fill(0,100,80);
    rect(170,340,250,100);
    triangle(170,340,170,440,110,340);
    triangle(420,340,420,440,480,340);
    rect(380,250,70,120);
    fill(40,180,255);
    ellipse(430,280,20,30);
    ellipse(400,280,20,30);
    fill(0,50,150);
    rect(10,410,700,200);
    fill(0,80,80);
    rect(150,340,200,6);

    if(y>=platform){
    if(velocity>5){
        state="lose";
    }
    else{
        state="win";
    }
    }
}
function losescreen(){

    //boat
    fill(0,100,80);
    rect(170,340,250,100);
    triangle(170,340,170,440,110,340);
    triangle(420,340,420,440,480,340);
    rect(380,250,70,120);
    fill(40,180,255);
    ellipse(430,280,20,30);
    ellipse(400,280,20,30);
    fill(0,50,150);
    rect(10,410,700,200);
    fill(0,80,80);
    rect(150,340,200,6);

    //fire
    fill(250,80,0);
    triangle(130,340,290,340,210,230);
    triangle(250,340,370,340,310,270);
    triangle(380,250,430,250,405,220);
    triangle(410,250,450,250,430,230);
    fill(200,150,0,150);
    triangle(160,340,260,340,210,260);
    triangle(270,340,350,340,310,290);
    triangle(390,250,420,250,405,230);
    triangle(420,250,440,250,430,240);

    //button
    fill(100,0,0);
    stroke(0,0,0);
    rect(200,100,200,80);
    fill(0,0,0);
    text("Try again",275,145);

    //red screen
    fill(200,0,0,100);
    rect(0,0,600);
}
function winscreen(){
    Character(x,y);
    //boat
    fill(0,100,80);
    rect(170,340,250,100);
    triangle(170,340,170,440,110,340);
    triangle(420,340,420,440,480,340);
    rect(380,250,70,120);
    fill(40,180,255);
    ellipse(430,280,20,30);
    ellipse(400,280,20,30);
    fill(0,50,150);
    rect(10,410,700,200);
    fill(0,80,80);
    rect(150,340,200,6);

    //button
    fill(0,100,0);
    stroke(0,0,0);
    rect(200,100,200,80);
    fill(0,0,0);
    text("Play again",275,145);

    //green screen
    fill(0,200,0,100);
    rect(0,0,600);
}

function Body(x,y){
    push();
noStroke();

//Body
fill(0,100,80);
ellipse(x,y-90,200 * 0.6,150 * 0.6);
rect(x-150,y-100,160* 0.6,30* 0.6);
rect(x-40,y-60,7* 0.6,40* 0.6);
rect(x+35,y-60,7* 0.6,40* 0.6);
rect(x-50,y-40,160* 0.6,10* 0.6);

//Details
fill(0,0,0);
rect(x-7,y-150,15* 0.6,30* 0.6);
ellipse(x-150,y-90,60* 0.6);
ellipse(x-3,y-150,60* 0.6,30* 0.6);

//Windows
fill(40,180,255);
ellipse(x-30,y-95,40* 0.6,60* 0.6);
ellipse(x,y-95,40* 0.6,60* 0.6);
ellipse(x+30,y-95,40* 0.6,60* 0.6);
pop();

//Propellers
}
function FPropeller(x,y){

    fill(40,0,10);
    triangle(x-3,y-152,x-90,y-120,x-80,y-100);
    triangle(x-3,y-152,x+90,y-120,x+80,y-100);
    triangle(x-3,y-152,x-20,y-240,x,y-240);

}
function BPropeller(x,y){
    fill(40,0,10);
    triangle(x-150,y-92,x-100,y-120,x-115,y-135);
    triangle(x-150,y-92,x-140,y-35,x-160,y-35);
    triangle(x-150,y-92,x-205,y-120,x-190,y-135);
}
function Character(x,y){
    Body(x,y);

    //Back Rotation
    push();
    translate(x-150,y-92);
    rotate(r);
    BPropeller(x-bpx,y-bpy);
    pop();

    
    //Front Rotation
    push();
    translate(x-3,y-152);
    rotate(r);
    FPropeller(x-fpx,y-fpy);
    pop();
    if (keyIsDown(32)){
        r+=0.6;
    }
    else{
        r+=0.3;
    }
}

function draw(){
    backgroundimage();
    if (state==="start") {
        startscreen();
      } else if (state==="game") {
        gamescreen();
      } else if (state==="win") {
        winscreen();
      }
      else if (state==="lose"){
        losescreen();
      }
    }
    
    function mouseClicked() {
      if (state==="start") {
        if (mouseX>200 && mouseX<400 && mouseY>100 && mouseY<180) {
          state="game";
        }
      } else if (state==="lose") {
        if (mouseX>200&& mouseX<400 && mouseY>100&& mouseY<180) {
          y=0;
          velocity=0;
          bpy=y-92;
          fpy=y-152;
          gravity=0.5;
          state="game";
        }
      }
      else if (state==="win") {
        if (mouseX>200&& mouseX<400 && mouseY>100&& mouseY<180) {
          y=0;
          velocity=0;
          bpy=y-92;
          fpy=y-152;
          gravity=0.5;
          state="game";
        }
      }
    
    
}
