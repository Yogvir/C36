class Form{
    constructor() {
    
    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(200, 100);

        var input = createInput("Name");
        input.position(200, 200);
            
        var button = createButton("PLAY");
        button.position(200, 250);

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
           
            var greeting = createElement('h2');
            greeting.html("Hey! WelCome to my Game " + name);
            greeting.position(200,200)


        
            })
}
}