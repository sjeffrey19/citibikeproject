// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);

function createMarkers(response) {
  console.log(response);

  // Create variable stations and assign to it response.data.stations
  

  // Initialize an array to hold bike markers.
  

  // Loop through the stations array.
  // for (   ) {
    

    // For each station, create a marker, and bind a popup with the station's name.
    

    // Add the marker to the bikeMarkers array.
    
  // }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  // createMap(   );
}

function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  

  // Create a baseMaps object to hold the streetmap layer.
  

  // Create an overlayMaps object to hold the bikeStations layer.
  

  // Create the map object with options.
  

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  
}
