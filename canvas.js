var myGamePiece;
function startIt(){
	myArea.boom();
	myGamePiece = new component(50,50,"red",10,120);
}
var myArea = {
	canvas : document.createElement("canvas"),
	boom : function(){
		this.canvas.width = 800;
		this.canvas.height = 500;
		this.canvas.id = "mycanvas";
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas,document.body.childNodes[0]);
		this.interval = setInterval(updateArea,20);
		window.addEventListener("keydown",function(e){
			myArea.key = e.keyCode;
		})
		window.addEventListener("keyup",function(e){
			myArea.key = false;
		})
		},
	clear : function(){
			this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

	}
}

function component(width,height,color,x,y){
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.update = function(){
		ctx = myArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	this.newPos = function(){
		this.x += this.speedX;
		this.y += this.speedY;
	}
}

function updateArea(){
		myArea.clear();
	myGamePiece.newPos();
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
	if(myArea.key && myArea.key == 37 || myArea.key == 65) myGamePiece.speedX = -1;
	if(myArea.key && myArea.key == 38 || myArea.key == 87) myGamePiece.speedY = -1;
	if(myArea.key && myArea.key == 39 || myArea.key == 68) myGamePiece.speedX = 1;
	if(myArea.key && myArea.key == 40 || myArea.key == 83) myGamePiece.speedY = 1;
	myGamePiece.update();
}

function moveup(){
	myGamePiece.speedY = -1;
}
function movedown(){
	myGamePiece.speedY = 1;
}
function moveleft(){
	myGamePiece.speedX = -1;
}
function moveright(){
	myGamePiece.speedX = 1;
}
function movestop(){
	myGamePiece.speedX = 0;
	myGamePiece.speedY = 0;
}

/*var container = document.getElementById("container");


var up = document.createElement("button");
up.setAttribute("id","up");
var up_txt = document.createTextNode("UP");
up.appendChild(up_txt);

var down = document.createElement("button");
down.setAttribute("id","down");
var down_txt = document.createTextNode("DOWN");
down.appendChild(down_txt);

var left = document.createElement("button");
left.setAttribute("id","left");
var left_txt = document.createTextNode("LEFT");
left.appendChild(left_txt);

var right = document.createElement("button");
right.setAttribute("id","right");
var right_txt = document.createTextNode("RIGHT");
right.appendChild(right_txt);

container.appendChild(up);*/
