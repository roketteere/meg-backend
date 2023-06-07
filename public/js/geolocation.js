let map;
let longitude;
let latitude;
let radius = 30;

// Get the user's location using the Geolocation API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  initMap();
}

function errorCallback(error) {
  console.log("Error retrieving user's location:", error);
}

async function initMap() {
  const { Map, Circle } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 19,
  });
  // Add a circle overlay to represent the radius
  const circle = new Circle({
    map,
    center: { lat: latitude, lng: longitude },
    radius: radius,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
  });
}
