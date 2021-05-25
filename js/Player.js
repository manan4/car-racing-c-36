class Player{
    constructor(){}

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            "playerCount":count
        })
    }

    update(name1){
        var playerIndex = "player" + playerCount;//string concatenation
        database.ref(playerIndex).update({
            "name":name1
        })

    }


}