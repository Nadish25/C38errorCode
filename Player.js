

 //read the value of gameState tht is stored in DB
    //update the new gameState in the DB

    //getState() it will be used to read gameState from the DB
    //update(state) it will update the new state in the DB
    //start() functions is used to start the game , gameState==0
    class Player {
        constructor(){
          this.index = null;
          this.distance = 0;
          this.name = null;
        }
      
        getCount(){
          var playerCountRef = database.ref('playerCount');
          playerCountRef.on("value",(data)=>{
            playerCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            playerCount: count
          });
        }
      
        update(){
          var playerIndex = "players/player" + this.index;
          database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
          });
        }
      
        static getPlayerInfo(){
          var playerInfoRef = database.ref('players');
          playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
          })
        }
      }