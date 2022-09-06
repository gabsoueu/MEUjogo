var lilith; //heroina
var terra; //piso
var jogo,config,menu; //classes
var buttonState; //estado da tela inicial do jogo
var spikes,moreSpikes; //obstaculos
var life = 3; //vida da personagem

function preload()
{
	spikes=loadImage("img/cactus_02.png");
}

function setup() {
	createCanvas(1200, 700);

	//criando novo objeto da classe jogo
	jogo = new Jogo ();
	jogo.begin ();

	//criando novo objeto da classe config
	config = new Config ();

}

function draw() {
	background ("black");

	if(buttonState === 1){
		jogo.starte();
	}

	if(buttonState === 2){
		config.starte();
	}

}