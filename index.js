    $(document).ready(function(){
    var myApp = {};
    myApp.userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb"];
    myApp.statusColor = [];
        for(var i=0; i<myApp.userArray.length; i++) {
        $.getJSON( "https://wind-bow.gomix.me/twitch-api/channels/" + myApp.userArray[i] + "?callback=?", function( data ) {
            $("#username").append("<p class=\"text-white border rounded\">" + data.name);

            if(data.mature === true) {
                myApp.statusColor[i] = "white";
                myApp.status = "Currently <b>ONLINE</b>";
                myApp.onlineClass = "class=\"bg-success border rounded\"";
            } else if(data.mature === false){
                myApp.statusColor[i] = "white";
                myApp.onlineClass = "class=\"bg-danger border rounded\"";
                myApp.status = "Currently <b>OFFLINE</b>";
            }
            myApp.datagame = data.game;
            if(myApp.datagame !== null) {
            $("#userpage").append("<p class=\"border border-dark rounded\"><a target=\"_blank\" href=\"" + data.url + "\">Recently Played: " + data.game + "</a></p>");
            } else {
            $("#userpage").append("<p><a target=\"_blank\" href=\"" + data.url + "\">Visit " + data.name + "'s Channel</a></p>");
            }
            $("#status").append("<p id=\"status" + i + "\"" + myApp.onlineClass + "style=\"color\: " + myApp.statusColor[i] + "\">" + myApp.status + "</p>");
});    
}
});