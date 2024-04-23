let map;

async function initMap() {
  // The location of Rowe Village
  const rowe = { lat: 41.833710, lng: -87.626209};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: rowe,
    mapId: "MAP",
  });

  var marker = new google.maps.Marker({
		position: rowe,
		map: map,
		animation: google.maps.Animation.BOUNCE,
		icon: {
      url: 'media/hawk.png',
      scaledSize: new google.maps.Size(65, 65)
    }
    
	});
}

initMap();