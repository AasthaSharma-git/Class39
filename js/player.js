class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){

        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",data=>{
            playerCount=data.val();
        });

    }

    updateCount(count){
      
        database.ref('/').update({
            playerCount:count
           
        });
    }

    update(){
      
        var playerIndex="player"+this.index;
        console.log(playerIndex);
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerInfo(){
       
      
        var playerDataRef=database.ref('/');
        playerDataRef.on("value",data=>{
            allPlayers=data.val();
        });


      
    




    }






}