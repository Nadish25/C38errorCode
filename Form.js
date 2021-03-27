//button 
//input
class Form{
    constructor(){
        this.input = createInput("Enter Username Here")
        this.button=createButton("Click To Play")
        this.greeting = createElement("h3");
        this.title = createElement("h1")  
    }

    //gameState ==1
    
    hide()
    {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }


    display(){

        this.title =createElement("h2")
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-150,0);

        
        
        this.input.position(displayWidth/2-150,displayHeight/2-80)

        
        this.button.position(displayWidth/2-125,displayWidth/4)
        
        

        this.button.mousePressed(() =>{

           this.input.hide();
           this.button.hide();
            player.name =this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount);

            

            this.greeting.html("Welcome" +" " +player.name )
            this.greeting.position(displayWidth/4-70,displayHeight/4)

        });
        
          
        
        
    
    }
  
}

