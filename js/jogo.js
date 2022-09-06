class Jogo {
    constructor () 
    {
    }
    begin () {
        menu = new Menu ();
        menu.display();
        //sprite da heroina
        lilith = createSprite (600, 200);

        //sprite do piso
        terra = createSprite (600, 550, 1200, 300);
        
        //sprite dos espinhos (beta)
        moreSpikes = new Group();
        this.obstaculos(600,375);
    }
    starte () {
        drawSprites();
        //colisão entre lilith x terra
	    lilith.collide(terra);

	    if(keyDown("right_arrow") || keyDown("left_arrow")){
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

        if(lilith.bounceOff(moreSpikes)){
            //lilith.velocityX = -8
            life -= 1
        }

        textSize(24);
        text("vida"+life,20,30);
    }
    obstaculos(x,y){
        var espinhos = createSprite (x,y);
        espinhos.addImage(spikes);
        espinhos.scale=0.2

        moreSpikes.add(espinhos);
    }
}