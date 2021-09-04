canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image= "mars.jpg";
rover_image= "rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag= new Image(); //defining a variable with a new image
    background_imgTag.onload= uploadbackground(); //setting a function, onloading this variable
    background_imgTag.src=background_image; //load image

    background_imgTag= new Image(); //defining a variable with a new image
    background_imgTag.onload= uploadrover(); //setting a function, onloading this variable
    background_imgTag.src=rover_image; //load image
}

function uploadbackground(){
    ctx.drawImage(background_imgTag ,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if (keypressed=="38"){
    up();
    console.log("up");
}
if (keypressed=="40"){
    down();
    console.log("down");
}
if (keypressed=="37"){
    left();
    console.log("left");
}
if (keypressed=="39"){
    right();
    console.log("right");
}
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}
