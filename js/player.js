class Player{
constructor(){
    
    }
    //read playerCount from database
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        })
    }
   // update player names
    update(name) {
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
           name : name
       })
    }
    //update count in database
    updateCount(count) {
        database.ref("/").update({
        playerCount : count
    })
}

}