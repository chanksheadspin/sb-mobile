

var pushNotification;

document.addEventListener("deviceready", function(){
    pushNotification = window.plugins.pushNotification;
    //alert("deviceready, registring pushNotifications");

    pushNotification.register(
    tokenHandler,
    errorHandler,
    {
        "badge": "true",
        "sound": "true",
        "alert": "true",
        "ecb": "onNotificationAPN"
    });
});



function tokenHandler(result) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    alert('device token = ' + result);
}



function errorHandler(error) {
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
    alert('error = ' + error);
}
