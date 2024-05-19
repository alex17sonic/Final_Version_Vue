function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude || 'Not available';
    var altitudeAccuracy = position.coords.altitudeAccuracy || 'Not available';
    var heading = position.coords.heading || 'Not available';
    var speed = position.coords.speed || 'Not available';
    var timestamp = new Date(position.timestamp);

    alert("Breitengrad: " + lat + 
          "\nLängengrad: " + lon + 
          "\nExaktheit: " + accuracy + " meters" +
          "\nHöhe: " + altitude + 
          "\nExaktheit Höhe: " + altitudeAccuracy +
          "\nRichtung: " + heading + 
          "\nGeschwindigkeit: " + speed + 
          "\nZeitstempel: " + timestamp.toLocaleString());
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
