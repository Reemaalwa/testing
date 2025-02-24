function initMap() {
    var shopLocation = { lat: 45.4236, lng: -75.6979 }; // Replace with actual latitude & longitude
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: shopLocation,
    });

    var marker = new google.maps.Marker({
        position: shopLocation,
        map: map,
        title: "Reema's Autobody Shop",
    });
}

// Ensure the map loads when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    if (typeof google === "undefined") {
        console.error("Google Maps API not loaded. Check API key.");
    }
});
