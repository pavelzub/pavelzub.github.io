stopcolor = "rgba(205, 186, 150, 0.5)";
colors = ["#ff3030", "BLUE", "YELLOW", "#98FB98", "#e066ff", "#9b30ff", "#00ee76", "#836fff" ]
cellsize = 16;
scoreval = 0;
speed = 32;
width = 16;
height = 24;

function creategame(){
	game = [height + 2];
	for (var i = 0; i < height + 2; i++) {
		game[i] = [width + 2];
		for (var j = 0; j < width + 2; j++) {
			if (i == 0 || j == 0 || j == width + 1 || i == height + 1) {
				game[i][j] = "BLACK";
			} else game[i][j] = "WHITE";
		}
	}
}


function TFigure (){
	this.x =  (width / 2 | 0) + width % 2 - 1 ;
	this.y = 0;
	this.color = "WHITE";
	this.stat = 0;
}

fgr = new TFigure();


function TFigureMega (){
	this.positions = [[[0, 0]]];
}

function TFigureI (){
	this.positions = [[[0, 0], [1, 0], [2, 0], [-1, 0]],
					  [[0, 0], [0, 1], [0, 2], [0, -1]]];
}

function TFigureT (){
	this.positions = [[[0, 0], [-1, 0], [1, 0], [0, 1]],
		  			  [[0, 0], [-1, 0], [0, -1], [0, 1]],
					  [[0, 0], [1, 0], [-1, -0], [0, -1]],
					  [[0, 0], [1, 0], [0, -1], [0, 1]]];
}

function TFigureDasha (){
	this.positions = [[[0, 0], [-1, 0], [1, 0], [0, 1], [0, -1]]];
}

function TFigureS() {
	this.positions = [[[0, 0], [1, 0], [0, 1], [-1, 1]],
					  [[0, 0], [-1, 0], [-1, -1], [0, 1]]];
}

function TFigureZ() {
	this.positions = [[[0, 0], [-1, 0], [0, 1], [1, 1]],
					  [[0, 0], [0, -1], [-1, 0], [-1, 1]]];
}

function TFigureL() {
	this.positions = [[[0, 0], [1, 0], [-1, 0], [-1, 1]],
					  [[0, 0], [0, -1], [-1, -1], [0, 1]],
					  [[0, 0], [-1, 0], [1, 0], [1, -1]],
					  [[0, 0], [0, -1], [0, 1], [1, 1]]];
}

function TFigureJ() {
	this.positions = [[[0, 0], [1, 0], [1, 1], [-1, 0]],
					  [[0, 0], [0, -1], [0, 1], [-1, 1]],
					  [[0, 0], [1, 0], [-1, 0], [-1, -1]],
		 			  [[0, 0], [0, -1], [1, -1], [0, 1]]];
}

function TFigureO (){
	this.positions = [[[0, 0], [0, 1], [1, 0], [1, 1]]];
}

TFigureI.prototype = fgr;
TFigureMega.prototype = fgr;
TFigureO.prototype = fgr;
TFigureT.prototype = fgr;
TFigureJ.prototype = fgr;
TFigureL.prototype = fgr;
TFigureS.prototype = fgr;
TFigureZ.prototype = fgr;
TFigureDasha.prototype = fgr;

function Rotate (){
	if (Check(1, 0, 0) == 1) Figure.stat = (Figure.stat + 1) % Figure.positions.length;
}

function Move (Side){
  if (Check(0, Side, 0) == 1) Figure.x += Side;
}

function Degrade (){
	if (Check(0, 0, 1) == 1) Figure.y++;
	else update();
}

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function control(e){
	e = e ||event;
	//alert(e.keyCode);
	// if (e.keyCode === 75) figures = fig;
	// if (e.keyCode === 76) figures = figurenorm;
	if (!begin || ( e.keyCode === 82)){
		creategame();
		NewFigure();
		draw();
		if (!(e.keyCode === 82) || pause || gameover) intervalid = setInterval(update, 500);
		pause = false;
		begin = true;
		gameover = false;
		return (1);
	}
	if (gameover) return 1;
	if (e.keyCode === 32 ) {
		pause = !pause;
		if (pause){
			ctx.fillStyle =  stopcolor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.font="30px Georgia";
			ctx.strokeText("PAUSE",80, height  * cellsize / 2);
			clearInterval(intervalid);
			return(1);
		} else intervalid = setInterval(update, 500);
	}
	if (pause) return 1;
	if (e.keyCode === 37 || e.keyCode === 39) Move (e.keyCode - 38);
	if (e.keyCode === 38) Rotate();
	if (e.keyCode === 40) Degrade();
	if (!gameover) draw();
}

function NewFigure (){
	Figure = NextFigure;
	NextFigure = new figures[getRandomInt(0, figures.length - 1)];
	NextFigure.color = colors[getRandomInt(0, colors.length - 1)];
	score.clearRect(0, 50, canvasscore.width, 70);
	score.strokeRect(0, 50, canvasscore.width, 70);
	if (Check(0, 0, 0) != 1) {
		gameover = true;
		ctx.fillStyle = stopcolor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.font = "30px Georgia";
		ctx.strokeText("GAME OVER", 35, height * cellsize / 2);
		ctx.font = "20px Georgia";
		ctx.strokeText("press R to restart", 50, height * cellsize / 2 + cellsize + 10);
		clearInterval(intervalid);
		return (0);
	}
	DrawFigure(score, NextFigure, 3.2, 4.5);
}

function init()
{
	creategame();
	figurenorm = [TFigureI, TFigureO, TFigureT, TFigureS, TFigureZ, TFigureL, TFigureJ];
	fig = [TFigureMega];
	figures = figurenorm;
	canvas = document.getElementById("gamefield");
	canvas.width  = width * cellsize;
	canvas.height = height * cellsize;
	document.onkeydown = control;
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle =  stopcolor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font="20px Georgia";
	ctx.strokeText("Press any key to START",20, height  * cellsize / 2);
	begin = gameover = pause = false;

	canvasscore = document.getElementById("scorefield");
	canvasscore.height = height * cellsize;
	score = canvasscore.getContext("2d");
	score.clearRect(0, 0, canvasscore.width, canvasscore.height);
	score.strokeRect(0, 0, canvasscore.width, 50);
	score.font="20px Georgia";
	score.strokeText("Next Figure", 10, 30);
	score.strokeRect(0, 50, canvasscore.width, 70);
	score.strokeText("Score", 38, 148);
	score.strokeRect(0, 120, canvasscore.width, 42);
	score.strokeText(scoreval, 10, 190);
	score.strokeRect(0, 162, canvasscore.width, 42);
	NextFigure = new figures[getRandomInt(0, figures.length - 1)];
	NextFigure.color = colors[getRandomInt(0, colors.length - 1)];
}


function Check(stat, movex, movey){
	for (var i = 0; i < Figure.positions[0].length; i++)
		if (game[Figure.positions[(Figure.stat + stat) % Figure.positions.length][i][1] + Figure.y + movey + 1]
	[Figure.positions[(Figure.stat + stat) % Figure.positions.length][i][0] + Figure.x + movex + 1] != "WHITE") return (0);
	return (1);
}

function DeleteLine(numb){
	for (var i = numb; i > 1; i--)
		for (var j = 1; j < width + 1; j++ ){
			game[i][j] = game[i -1][j];
			game[i -1][j] = "WHITE";
		}
}

function update()
{
	if (Check(0, 0, 1) == 1) Figure.y++;
	else {
		for (var i = 0; i < Figure.positions[0].length; i++)
			game[Figure.positions[Figure.stat][i][1] + Figure.y + 1]
				[Figure.positions[Figure.stat][i][0] + Figure.x + 1] = Figure.color;

		count = 0;
		for (var i = 1; i < height + 1; i++) {
			Del = true;
			for (var j = 0; j < width + 2; j++)
				if (game[i][j] == "WHITE") {
					Del = false;
					break;
				}
			if (Del) {
				DeleteLine(i--);
				count++;
			}
		}

		if (count == 1) scoreval += 100;
		if (count == 2) scoreval += 300;
		if (count == 3) scoreval += 700;
		if (count == 4) scoreval += 1500;
		score.clearRect(0, 162, canvasscore.width, 42);
		score.strokeText(scoreval, 10, 190);
		score.strokeRect(0, 162, canvasscore.width, 42);

		NewFigure();
		if (gameover) return (0);
	}
	draw();

}

function DrawFigure (ACanvas, AFigure, centerx, centery){
	for (var i = 0; i < AFigure.positions[0].length; i++) {
		ACanvas.fillStyle = AFigure.color;
		ACanvas.fillRect((AFigure.positions[AFigure.stat][i][0] + centerx) * cellsize,
			(AFigure.positions[AFigure.stat][i][1] + centery) * cellsize,
			cellsize, cellsize);
		ACanvas.strokeRect((AFigure.positions[AFigure.stat][i][0] + centerx) * cellsize + 0.5,
			(AFigure.positions[AFigure.stat][i][1] + centery) * cellsize + 0.5,
			cellsize, cellsize);
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < height + 2; i++) {
		for (var j = 0; j < width + 2; j++) {
			if (game[i][j] != "WHITE") {
				ctx.fillStyle = game[i][j];
				ctx.fillRect((j - 1) * cellsize , (i - 1) * cellsize, cellsize, cellsize);
				ctx.strokeRect((j - 1) * cellsize + 0.5, (i - 1) * cellsize + 0.5, cellsize, cellsize);
			}
		}
	}
	DrawFigure(ctx, Figure, Figure.x, Figure.y);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

init();
