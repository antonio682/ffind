var getLocation = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(FlowingFreeApp.showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}