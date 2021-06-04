class Game{
   
    constructor(){}


     getState(){

         var gameStateRef=database.ref('gameState');
         gameStateRef.on("value",function(data){
         gameState= data.val();
          
            
         });

    }

     async start(){

        if(gameState===0){

           player=new Player();
       
           var playerCountRef=await database.ref('playerCount').once("value");
           if(playerCountRef.exists()){
              
                 player.getCount();
           
            }
            
           form=new Form();
           form.display();

          
           car1 = createSprite(100,200);
           car2 = createSprite(300,200);
           car3 = createSprite(500,200);
           car4 = createSprite(700,200);
           cars = [car1, car2, car3, car4];

        }

        
     }

     play(){

        form.disappear();
        textSize(40);
        text('Game Start!',120,100);
        Player.getPlayerInfo();
        
        if(allPlayers!==undefined){
            background('white');
            drawSprites();
            for(var i=1;i<=playerCount;i++){
                
                var playerIndex="player"+i;

                y=displayHeight-allPlayers[playerIndex].distance;
                    
                cars[i-1].y=y;
                
                 if(i===player.index){
                    
                   cars[i-1].shapeColor="red";
                    camera.position.x=cars[i-1].x;
                    camera.position.y=cars[i-1].y;
                }
                else{
                      
                }
               
              }
        }
         if(keyIsDown(UP_ARROW)){
              
            player.distance=player.distance+20;
            player.update();
         }

            
    }

    update(state){
        gameState=state;
        database.ref('/').update({
            gameState:state
        });
    }

  



}