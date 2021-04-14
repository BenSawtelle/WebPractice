/*
var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");
ctx.fillText("helloworld",10,150);
*/

const INPUTS = {
	UP:87,
	DOWN:83,
	LEFT:65,
	RIGHT:68,
	CREATE_ENEMY:78
};



var spriteStartX = 159;
var spriteStartY = 1;

var spriteWidth = 16;
var spriteHeight = 16;

var enemyCount = 0;
var enemyList = [];

var player1 = {
	x:10,
	y:10,
	animFrame:0,
	dir:0,
	size:10,
	speed:10
	
};

var player2 = {
	x:580,
	y:10,
	animFrame:0,
	dir:0,
	size:10,
	speed:10
	
};


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 400;

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "assets\\images\\pac.png";



var keyclick = {};
document.addEventListener("keydown", function (event) {
	keyclick[event.keyCode] = true;
	move(keyclick, player1);
	console.log(keyclick);
}, false);


document.addEventListener("keyup", function (event) {
	delete keyclick[event.keyCode];
	console.log(keyclick);
}, false);

function checkReady(){
	this.ready = true;
		playgame();
}


function playgame(){
	render();
}

function render(){
	ctx.fillStyle = "#CCCCCC";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	/*ctx.drawImage(mainImage, pacLoc1*spriteWidth, 0, 32, 32, 10, 10, 32, 32);*/
	ctx.fillStyle = "Red";
	ctx.fillRect(player1.x, player1.y, player1.size, player1.size);
	for(i=0; i < enemyCount; i++){
		ctx.fillStyle = "Blue";
		ctx.fillRect(enemyList[i].x, enemyList[i].y, player2.size, player2.size);
	}
}

function move(keyclick, player){
	if (INPUTS.UP in keyclick){player.y -= player.speed;
		if (player.y < 0) {player.y = 0}}
	if (INPUTS.DOWN in keyclick){player.y += player.speed;}
	if (INPUTS.LEFT in keyclick){player.x -= player.speed;}
	if (INPUTS.RIGHT in keyclick){player.x += player.speed;}
	if (INPUTS.CREATE_ENEMY in keyclick){createEnemy(); console.log(enemyCount);}
	render();
}


function createEnemy(){
	var enX = Math.round(Math.random()*canvas.width);
	var enY = Math.round(Math.random()*canvas.height);
	
	enemyCount++;
	
	enemyList.push(new Enemy(enX, enY));
}


function Enemy(xPos, yPos){
	this.x = xPos;
	this.y = yPos;
}
