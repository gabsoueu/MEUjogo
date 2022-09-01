class Menu {
    constructor ()
    {
        this.titulo = createImg ("img/alucardSprites.png","config titulo")
        this.botoesJ = createButton ("jogar")
        this.botoesC = createButton ("configurações")
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
             
        })
    }
    display () {
        this.apElementos ()
        this.buttonJpressed () 
        this.buttonCpressed ()
    }
}