class Game{
    constructor(){

    }
//read the gameState from database
    getState() {
    database.ref("gameState").on("value",function(data){
        gameState = data.val();
        
    })
}


    //update gameState to database
    updateState(state) {
    database.ref("/").update({
        gameState:state
    })
    }
    
    start() {
        if (gameState === 0) { 
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
}   
    }
    
}

