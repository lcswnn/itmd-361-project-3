// Initialize and add the map
let map;

async function initMap() {
  // The location of Rowe Village
  const position = { lat: 41.833710, lng: -87.626209};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "MAP",
  });


  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Rowe Village",
  });
}

initMap();