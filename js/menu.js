class Menu {
    constructor ()
    {
        this.titulo = createImg ("img/alucardSprites.png","config titulo")
        this.botoesJ = createButton ("jogar") //botão Jogo
        this.botoesC = createButton ("configurações") //botão Configurações
    }
    apElementos () {
        this.titulo.position (width/2,height/3)
        this.botoesJ.position (width/2,height/3+20)
        this.botoesC.position (width/2,height/3+40)

        this.titulo.class ("configtitulo")
        this.botoesJ.class ("configbotao")
        this.botoesC.class ("configbotao")
    }
    buttonJpressed () {
       this.botoesJ.mousePressed (()=>{
             buttonState = 1;
             this.hide();
        })
    }
    buttonCpressed () {
        this.botoesC.mousePressed (()=>{
            buttonState = 2;
            this.hide();
        })
    }
    display () {
        this.apElementos ()
        this.buttonJpressed () 
        this.buttonCpressed ()
    }
    hide () {
        this.titulo.hide();
        this.botoesJ.hide();
        this.botoesC.hide();
    }
}