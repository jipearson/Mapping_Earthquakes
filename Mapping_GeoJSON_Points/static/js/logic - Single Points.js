// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// The 'mapid' will reference the id tag in our <div> element on the index.html file.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.61899948120117, -122.375], 13);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup(`<h2>${feature.properties.name}</h2><hr><h3>${feature.properties.city}, ${feature.properties.country}</h3>`);
//   }
// }).addTo(map);

// Grabbing our GeoJSON data. 
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup(`<h2>Airport code: ${feature.properties.faa}</h2><hr><h3>Airport name: ${feature.properties.name}</h3>`);
   }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'outdoors-v11',
    tileSize: 512,

    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);