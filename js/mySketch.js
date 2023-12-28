//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let ballsArray = [];
let counter = 0;

function preload() {
	winSound = loadSound('Win.wav');
	loseSound = loadSound('Lose.wav');
	img = loadImage('https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_TargetMarket_Final_01.jpg?v=1639588717');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 10; i++) {
		let singleBall = new bouncingBall(random(width), random(height), random(80, 100), random(1, 5), random(1, 5));
		ballsArray.push(singleBall);
	}
}

function draw() {
	background(img);

	for (let i = 0; i < ballsArray.length; i++) {
		ballsArray[i].move();
		ballsArray[i].show();
	}

	rulesAndPoints();
	gameEndResults();
}

function mousePressed() {

	let mouseInsideCircle = false;

	for (let i = ballsArray.length - 1; i >= 0; i--) {
		let d = dist(mouseX, mouseY, ballsArray[i].x, ballsArray[i].y);
		if (d < ballsArray[i].d / 2) {
			ballsArray.splice(i, 1);
			winSound.play();
			counter++;
			mouseInsideCircle = true;
			break;
		}
	}
	if (!mouseInsideCircle) {
		loseSound.play();
		counter--;
		for (let i = ballsArray.length - 1; i >= 0; i--) {
			ballsArray[i].d = ballsArray[i].d * 0.9;
			ballsArray[i].speedX = ballsArray[i].speedX * 1.1;
			ballsArray[i].speedY = ballsArray[i].speedY * 1.1;
		}
	}
}

class bouncingBall {
	constructor(x, y, d, speedX, speedY) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.speedX = speedX;
		this.speedY = speedY;
	}

	move() {
		if (this.x > width - this.d / 2 || this.x < this.d / 2) {
			this.speedX = -this.speedX;
		}
		if (this.y > height - this.d / 2 || this.y < this.d / 2) {
			this.speedY = -this.speedY;
		}
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}

	show() {
		noStroke();
		fill('red');
		circle(this.x, this.y, this.d);
		fill('white');
		circle(this.x, this.y, this.d * 0.8);
		fill('red');
		circle(this.x, this.y, this.d * 0.6);
		fill('white');
		circle(this.x, this.y, this.d * 0.4);
		fill('red');
		circle(this.x, this.y, this.d * 0.2);
	}
}

function gameEndResults() {
	if (ballsArray.length <= 0) {
		background(img);
		textSize(80);
		text("Game Over!\nPoints: " + counter, 20, height / 2);
	}
}

function rulesAndPoints() {
    textSize(20);
    textAlign(LEFT);
    text("Rules:\nClick on the targets to make them disappear.\nWin 1 point per target hit and lose 1 point per target missed.\nAll targets will get smaller and move quicker whenever a target is missed.", 20, 30);
    textSize(100);
    text(counter, 20, height * 95 / 100);
}