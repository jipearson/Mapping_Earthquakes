// Add console.log to check to see if our code is working.
console.log("working test");
console.log("why is this not updating?")

// Create the map object with a center and zoom level.
// The 'mapid' will reference the id tag in our <div> element on the index.html file.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
let marker = L.circle([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);

// Marker for home
let home = L.marker([36.1060761565529, -86.73988331848427]).addTo(map);

// Marker for lakeview
let lakeview = L.circleMarker([44.0657021621797, -86.38146084434723]).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);