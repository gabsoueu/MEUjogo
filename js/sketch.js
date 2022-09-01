var lilith; //heroina
var terra; //piso
var jogo,config,menu; //classes

function preload()
{
}

function setup() {
	createCanvas(1200, 700);

	//criando novo objeto da classe jogo
	jogo = new Jogo ();
	jogo.begin ();

	//sprite da heroina
	lilith = createSprite (600, 200);

	//sprite do piso
	terra = createSprite (600, 550, 1200, 300);
}

function draw() {
	background ("black");
	drawSprites();

	//colisão entre lilith x terra
	lilith.collide(terra);

	if(keyDown("right_arrow") ||keyDown("left_arrow")){
		if (keyDown("left_arrow")){
			lilith.velocityX = -8;
		}
		if (keyDown("right_arrow")){
			lilith.velocityX = 8;
		}
	}
	else{
		lilith.velocityX = 0;
	}

	lilith.velocityY += 2;

	if(keyDown("up_arrow")){
		lilith.velocityY = -16;
	}
}