// Create the street view tile layer that will be the default background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create the dark view tile layer that will be an option background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

let satelliteStreets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
  Streets: streets,
  Dark: dark,
  "Satellite Streets": satelliteStreets 
};

// The 'mapid' will reference the id tag in our <div> element on the index.html file.
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto Routes GeoJSON URL
let torontoHoods  = "https://raw.githubusercontent.com/jipearson/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";


// Create a style for the lines.#ffffa1
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
};

// Grabbing our airport GeoJSON data.
d3.json(torontoHoods).then(data =>{
  console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
        layer.bindPopup(`<h1>Neighborhood ${feature.properties.AREA_NAME}</h1> <hr> <h2>${feature.properties.AREA_S_CD}</h2>`);
      }
  }).addTo(map);
  });

