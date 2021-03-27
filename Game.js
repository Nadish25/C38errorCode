 
 
     //read the value of gameState tht is stored in DB
    //update the new gameState in the DB

    //getState() it will be used to read gameState from the DB
    //update(state) it will update the new state in the DB
    //start() functions is used to start the game , gameState==0
    class Game {
        constructor(){}
      
        getState(){
          var gameStateRef  = database.ref('gameState');
          gameStateRef.on("value",function(data){
             gameState = data.val();
          })
      
        }
      
        update(state){
          database.ref('/').update({
            gameState: state
          });
        }
      
        async start(){
          if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
          }
        }
      

        car1=createSprite(100,200,50,50)
        car2=createSprite(300,200,50,50)
        car3=createSprite(500,200,50,50)
        car4=createSprite(700,200,50,50)
        cars=[car1,car2,car3,car4]

        play(){
          
          form.hide();
          textSize(30);
          text("Game Start", 120, 100)
          Player.getPlayerInfo();
      
          if(allPlayers !== undefined){
            var indx=0;
            var x;
            var y;
            //var display_position = 130;
            for(var plr in allPlayers){
            //add 1 to the index for every loop 
            indx = indx + 1 ; 
            //position the cars a little away from each other in x direction 
            /*x = x + 200; 
            console.log(x)*/
            //console.log(y)
            //use data form the database to display the cars in y direction
             y = displayHeight - allPlayers[plr].distance;
             cars[indx-1].x = x;
             cars[indx-1].y = y;
                 

              if(indx==player.index){
                fill ("red");
                //cars[index-1].fill ("red");
              }



              //display_position+=20;
              /*textSize(15);
              text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
            }
          }
      
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
            
          }
          drawSprites();
        

        }
      }