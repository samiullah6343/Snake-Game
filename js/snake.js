var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

var snakeW = 10;
var snakeH = 10;
var dir = "right";


function snakedemo(x, y) {

    ctx.fillStyle = "green";
    ctx.fillRect(x * snakeH, y * snakeW, snakeW, snakeH);
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeH, y * snakeW, snakeW, snakeH);
}



//create snnke
var len = 4;
var snake = [];

for (var i = len - 1; i >= 0; i--) {
    snake.push({
        x: i,
        y: 0
    });

}
document.addEventListener("keydown", dircontrol);

function dircontrol(e) {
    if (e.keyCode == 37 ) {

        dir = "left";
    } else if (e.keyCode == 39 ) {
        dir = "right";
    } else if (e.keyCode == 38) {
        dir = "up";
    } else if (e.keyCode == 40) {
        dir = "down";
    }
}
var food = {
    x: Math.round(Math.random() * (cvs.width / snakeW) + 1),
    y: Math.round(Math.random() * (cvs.height / snakeH) + 1)

}

function fooddraw(x, y) {

    ctx.fillStyle = "red";
    ctx.fillRect(x * snakeH, y * snakeW, snakeW, snakeH);
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeH, y * snakeW, snakeW, snakeH);
}

function setvaluesnakedemo() {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    for (var i = 0; i < snake.length; i++) {
        var X = snake[i].x;
        var Y = snake[i].y;
        snakedemo(X, Y);
    }
    fooddraw(food.x, food.y);
    //new head
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
    if(snakeX < 0|| snakeY < 0|| snakeX >=cvs.width/snakeW || snakeY>= cvs.height/snakeH)
     {
        ctx.font = "80px Arial ";
        ctx.fillText("Game Over",60,250);
     }
    if (dir == "right") {
        snakeX++;
    } else if (dir == "left") {
        snakeX--;
    } else if (dir == "up") {
        snakeY--;
    } else if (dir == "down") {
        snakeY++;
    }
    if (snakeX == food.x && snakeY == food.y) {
        food = {
            x: Math.round(Math.random() * (cvs.width / snakeW) + 1),
            y: Math.round(Math.random() * (cvs.height / snakeH) + 1)
        }

        var newHeader = {
            x: snakeX,
            y: snakeY



        }
    } else {
        snake.pop();
        var newHeader = {
            x: snakeX,
            y: snakeY



        }

    }



    snake.unshift(newHeader);


}
 function gameOver()
 {

    var g = document.getElementById("wa");
    g.src="images/download.png";
 }

setInterval(setvaluesnakedemo, 100);