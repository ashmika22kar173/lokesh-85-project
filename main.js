canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

car_width = 120;
car_height = 70;

car_x = 10;
car_y = 10;

car2_width = 120;
car2_height = 70;

car2_x = 10;
car2_y = 100;

var background_img = "racing.jpg"; 
var car_img = "car1.png";
var car2_img = "car2.png";


function add() {
    background_img1 = new Image();
    background_img1.onload = uploadbackground;
    background_img1.src = background_img;

    car_img1 = new Image();
    car_img1.onload = uploadcar;
    car_img1.src = car_img;

car2_img1 = new Image();
car2_img1.onload = uploadcar2;
car2_img1.src = car2_img;
}

function uploadbackground() {

    ctx.drawImage(background_img1, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {


    ctx.drawImage(car_img1, car_x, car_y, car_width, car_height);
}

function uploadcar2() {


    ctx.drawImage(car2_img1, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == '38') {
        up();
        console.log("up");

    }
    if (keypress == '40') {
        down();
        console.log("down");

    }

    if (keypress == '37') {
        left();
        console.log("left");

    }
    if (keypress == '39') {
        right();
        console.log("right");

    }

    if (keypress == '87') {
        car2_up();
        console.log("w");

    }

    if (keypress == '83') {
        car2_down();
        console.log("s");

    }

    if (keypress == '65') {
        car2_left();
        console.log("a");

    }

    if (keypress == '68') {
        car2_right();
        console.log("d");

    }
}
function up()
{
if (car_y >=0)
{
car_y = car_y - 10;
console.log("When up arrow is pressed ="+ car_x +"-"+car_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function down()
{
if (car_y <=500)
{
car_y = car_y + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function left()
{
if (car_x >=0)
{
car_x = car_x - 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function right()
{
if (car_x <=700)
{
car_x = car_x + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function car2_up()
{
if (car2_y >=0)
{
car2_y = car2_y - 10;
console.log("When up arrow is pressed ="+ car2_x +"-"+car2_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function car2_down()
{
if (car2_y <=500)
{
car2_y = car2_y + 10;
console.log("When up arrow is pressed ,x="+ car2_x +" y ="+car2_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function car2_left()
{
if (car2_x >=0)
{
car2_x = car2_x - 10;
console.log("When up arrow is pressed ,x="+ car2_x +" y ="+car2_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}

function car2_right()
{
if (car2_x <=700)
{
car2_x = car2_x + 10;
console.log("When up arrow is pressed ,x="+ car2_x +" y ="+car2_y);
uploadbackground();
uploadcar();
uploadcar2();

}
}