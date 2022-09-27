class Jogo {
    constructor () 
    {
    }
    begin () {
        menu = new Menu ();
        menu.display();
        //sprite da heroina
        lilith = createSprite (600, 350);

        //sprite do piso
        terra = createSprite (600, 550, width*10, 300);
        
        //sprite do vilao
        salazar = createSprite(1500, 320, 200, 200);
        
        //sprite dos espinhos (beta)
        moreSpikes = new Group();
       // this.obstaculos(900,375);
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

        if(lilith.collide(moreSpikes)){
            lilith.visible = false;
            life -= 1
            lilith.x = espinhos.x - 200
            setTimeout (()=>{
                lilith.visible = true;
            },300)

        }

        camera.position.y = lilith.position.y
        camera.position.x = lilith.position.x

        textSize(24);
        text("vida = "+life,camera.position.x - 500,camera.position.y - 300);

        this.chefao();

    }
    obstaculos(x,y){
        espinhos = createSprite (x,y);
        espinhos.addImage(spikes);
        espinhos.scale=0.2

        moreSpikes.add(espinhos);
    }
    chefao(){
        

        if (lilith.x > salazar.x - 500) {
            salazar.velocityY =-6
            if (salazar.y <= 0) {
                salazar.velocityY = 2
                salazar.setSpeedAndDirection(16, lilith.x/6)
            }
        }
    }
    
}